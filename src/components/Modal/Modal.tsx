/**
 * Defines the Modal component.
 *
 * @file This file defines the Modal component, intended to display overlaying content.
 * @since 1.0.0
 */

import {
  DialogTrigger,
  Dialog as AriaDialog,
  Modal as AriaModal
} from 'react-aria-components';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/Button';
import '../../assets/css/App.css';
import './Modal.css';

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  triggerButtonProps: ButtonProps;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  triggerButtonProps
}) => {
  return (
    <DialogTrigger>
      <Button {...triggerButtonProps} />
      <AriaModal className="modal_overlay">
        <AriaDialog className="modal">
          {({ close }) => (
            <>
              <div className="modal__header">
                {title && <h2 className="modal__title">{title}</h2>}
                <Button
                  className="modal__close-button"
                  iconColor="default"
                  iconOnly
                  iconRight="icon-control-close"
                  iconSize="md"
                  label="Close modal"
                  size="none"
                  variety="plain"
                  onPress={close}
                />
              </div>
              <div className="modal__content">{children}</div>
            </>
          )}
        </AriaDialog>
      </AriaModal>
    </DialogTrigger>
  );
};

export default Modal;
