/**
 * Defines the Dialog component.
 *
 * Utilizes the `Dialog` component from Adobe React Aria to display content in an overlay or modal manner.
 * The component is designed to be reusable and can be easily integrated into different parts of an application,
 * providing dynamic text for confirmation and cancellation buttons, as well as customizable action for
 * the confirmation button.
 *
 * @file   This file defines the Dialog component, designed to display content in an overlay or popup.
 * @since  1.0.0
 */

import React from 'react';
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogTrigger,
  Modal
} from 'react-aria-components';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/Button';
import '../../assets/css/App.css';
import './Dialog.css';

interface DialogProps {
  children?: React.ReactNode;
  yesText?: string;
  noText?: string;
  onYes?: () => void;
  yesUrl?: string;
  triggerButtonProps: ButtonProps;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  yesText = "Yes, I'm sure",
  noText = 'No, cancel',
  onYes,
  yesUrl,
  triggerButtonProps
}) => {
  const handleYesAction = () => {
    if (yesUrl) {
      window.location.href = yesUrl; // Navigate to the provided URL
    } else if (onYes) {
      onYes(); // Execute the provided onPress function
    }
  };

  return (
    <DialogTrigger>
      <Button {...triggerButtonProps} />
      <Modal className="dialog_overlay">
        <AriaDialog className="dialog">
          {({ close }) => (
            <>
              <div className="dialog__header">
                <Button
                  iconColor="default"
                  iconOnly
                  iconRight="icon-control-close"
                  iconSize="md"
                  label="Close dialog"
                  size="none"
                  variety="plain"
                  onPress={close}
                />
              </div>
              <div className="dialog__content">{children}</div>
              <div className="dialog__footer">
                <Button
                  label={yesText}
                  variety="black"
                  onPress={handleYesAction}
                />
                <Button onPress={close} label={noText} variety="outline-gray" />
              </div>
            </>
          )}
        </AriaDialog>
      </Modal>
    </DialogTrigger>
  );
};

export default Dialog;
