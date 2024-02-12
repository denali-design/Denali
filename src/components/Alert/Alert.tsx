/**
 * @file This file defines the Alert component, meant to display important messages in a noticeable way.
 * @since 1.0.0
 */

import { useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import '../../assets/css/App.css';
import './Alert.css';

export type AlertType = 'info' | 'success' | 'warning' | 'danger';
type IconColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'on-vivid';

export interface AlertProps {
  type?: AlertType;
  className?: string;
  title: string;
  message?: string;
  dismissible?: boolean;
}

const Alert = ({
  type,
  className,
  title,
  message,
  dismissible
}: AlertProps) => {
  // Set alert visibility state
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  let alertClass;
  let iconName;
  let iconColor: IconColor;

  switch (type) {
    case 'info':
      alertClass = 'alert--info';
      iconName = 'icon-control-information-circle';
      iconColor = 'info';
      break;
    case 'success':
      alertClass = 'alert--success';
      iconName = 'icon-control-check-circle';
      iconColor = 'success';
      break;
    case 'warning':
      alertClass = 'alert--warning';
      iconName = 'icon-alert-warning';
      iconColor = 'warning';
      break;
    case 'danger':
      alertClass = 'alert--danger';
      iconName = 'icon-alert-stop-warning';
      iconColor = 'danger';
      break;
    default:
      alertClass = 'alert--default';
      iconName = 'icon-control-information-circle';
      iconColor = 'default';
  }

  // Close alert when close button is clicked
  const handleClose = () => setIsVisible(false);

  return (
    <div className={`alert ${alertClass} ${className ?? ''}`} role="alert">
      <div className="w-full">
        <div className="alert__heading">
          <Icon color={iconColor} name={iconName} size="md" />
          <Heading
            className="alert__title"
            name={title}
            level="h2"
            style="h5"
            type="app"
          />
        </div>
        {message && (
          <div className="alert__content">
            <Paragraph className="alert__message">{message}</Paragraph>
          </div>
        )}
      </div>
      {dismissible && (
        <Button
          iconColor="default"
          iconOnly
          iconRight="icon-control-close"
          label="Close Alert"
          variety="plain"
          onPressEnd={handleClose}
        />
      )}
    </div>
  );
};

export default Alert;
