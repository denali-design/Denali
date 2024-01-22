/**
 * Defines the FileTrigger component.
 *
 * @file This file defines the FileTrigger component, intended to initiate a file selection dialog.
 * @since 1.0.0
 */

import React from 'react';
import { FileTrigger as AriaFileTrigger } from 'react-aria-components';
import Button from '../Button/Button';

function FileTrigger() {
  const [file, setFile] = React.useState<null | string[]>(null);

  return (
    <>
      <AriaFileTrigger
        onSelect={(e) => {
          if (e) {
            const files = Array.from(e);
            const filenames = files.map((file) => file.name);
            setFile(filenames);
          }
        }}
      >
        <Button label="Browse File" variety="black" />
      </AriaFileTrigger>
      <p className="mt-2 text-sm">{file && file.join(', ')}</p>
    </>
  );
}

export default FileTrigger;
