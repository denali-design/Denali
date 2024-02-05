import { useState } from 'react';
import {
  DropZone as AriaDropZone,
  Text,
  FileTrigger
} from 'react-aria-components';
import type { FileDropItem, DropItem } from 'react-aria';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { fileSizeToReadableFormat } from '../../utilities/fileSizeFormat';
import './DropZone.css';

interface DropZoneProps {
  acceptsMultiple?: boolean;
  acceptedFileTypes?: string[];
  description?: string;
  maxFileSize?: number; // Size in bytes
}

function DropZone({
  acceptsMultiple = false,
  acceptedFileTypes = [],
  description = 'Click to upload or drag and drop',
  maxFileSize = Infinity
}: DropZoneProps) {
  const [files, setFiles] = useState<null | string[]>(null);
  const [fileSizeError, setFileSizeError] = useState<boolean>(false);
  const [fileTypeError, setFileTypeError] = useState<boolean>(false);
  const [multipleFilesError, setMultipleFilesError] = useState<boolean>(false);

  const fileFilter = (file: File) => {
    const isAcceptedType =
      acceptedFileTypes.length === 0 || acceptedFileTypes.includes(file.type);
    const isWithinSizeLimit = file.size <= maxFileSize;

    if (!isAcceptedType) {
      setFileTypeError(true);
      return false;
    }

    if (!isWithinSizeLimit) {
      setFileSizeError(true);
      return false;
    }

    return true;
  };

  const handleDrop = async (e: { items: DropItem[] }) => {
    setFileTypeError(false);
    setFileSizeError(false);
    setMultipleFilesError(false);

    if (!acceptsMultiple && e.items.length > 1) {
      setMultipleFilesError(true);
      return;
    }

    const filePromises = e.items
      .filter((item: DropItem): item is FileDropItem => item.kind === 'file')
      .map((fileDropItem: FileDropItem) => fileDropItem.getFile());

    const resolvedFiles = await Promise.all(filePromises);
    const validFiles = resolvedFiles.filter(fileFilter);
    const filenames = validFiles.map((file) => file?.name || 'Unknown file');
    setFiles(filenames);
  };

  return (
    <AriaDropZone className="dropzone" onDrop={handleDrop}>
      <FileTrigger
        allowsMultiple={acceptsMultiple}
        acceptedFileTypes={acceptedFileTypes}
        onSelect={(e) => {
          if (e) {
            const fileArray = Array.from(e);
            const filteredFiles = fileArray.filter(fileFilter);
            const filenames = filteredFiles.map((file) => file.name);
            setFiles(filenames);
            setFileSizeError(fileArray.length !== filteredFiles.length);
          }
        }}
      >
        <div className="dropzone__description">
          {!fileSizeError && files && files.length > 0 ? (
            <>
              <Icon
                color="default"
                name="icon-control-check-circle"
                size="xl"
              />
              <Text slot="label" style={{ display: 'block' }}>
                {files.length} File{files.length > 1 ? 's' : ''} selected.
              </Text>
            </>
          ) : (
            <>
              <Icon color="default" name="icon-data-cloud-upload" size="xl" />
              {description && (
                <Text slot="label" style={{ display: 'block' }}>
                  {description}
                </Text>
              )}
              {acceptedFileTypes && (
                <Text
                  slot="label"
                  style={{ display: 'block' }}
                  className="dropzone__requirements"
                >
                  {acceptedFileTypes &&
                    acceptedFileTypes.length > 0 &&
                    acceptedFileTypes.join(', ')}
                  {acceptedFileTypes &&
                    acceptedFileTypes.length > 0 &&
                    maxFileSize &&
                    maxFileSize !== Infinity &&
                    `, `}
                  {maxFileSize &&
                    maxFileSize !== Infinity &&
                    `${fileSizeToReadableFormat(maxFileSize)}`}
                </Text>
              )}
            </>
          )}
        </div>

        {!fileSizeError && files && files.length > 0 && (
          <ul className="dropzone__files">
            {files.map((file, index) => (
              <li className="dropzone__filename" key={index}>
                {file}
              </li>
            ))}
          </ul>
        )}
        <Button label="Browse File" variety="black" />
        {multipleFilesError && (
          <div>
            <p className="dropzone__error" aria-live="polite">
              <Icon color="danger" name="icon-alert-urgent" size="sm" />
              Only one file is allowed.
            </p>
          </div>
        )}

        {fileTypeError && (
          <div>
            <p className="dropzone__error" aria-live="polite">
              <Icon color="danger" name="icon-alert-urgent" size="sm" />
              One or more files do not meet the required file type:{' '}
              {acceptedFileTypes.join(', ')}.
            </p>
          </div>
        )}

        {fileSizeError && (
          <div>
            <p className="dropzone__error" aria-live="polite">
              <Icon color="danger" name="icon-alert-urgent" size="sm" />
              One or more files exceed the size limit of{' '}
              {fileSizeToReadableFormat(maxFileSize)}.
            </p>
          </div>
        )}
      </FileTrigger>
    </AriaDropZone>
  );
}

export default DropZone;
