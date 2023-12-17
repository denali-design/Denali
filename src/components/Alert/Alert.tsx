/**
 * @file This file defines the Alert component, meant to display important messages in a noticeable way.
 * @since 1.0.0
 */

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
  message?: string; // alertMessage is optional
}

const Alert = ({ type, className, title, message }: AlertProps) => {
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

  return (
    <div className={`alert ${alertClass} ${className ?? ''}`}>
      <div className="alert__heading">
        <Icon color={iconColor} name={iconName} size="md" />
        <Heading className="alert__title" level={2} size={5} type="app">
          {title}
        </Heading>
      </div>
      {message && (
        <div className="alert__content">
          <Paragraph className="alert__message">{message}</Paragraph>
        </div>
      )}
    </div>
  );
};

export default Alert;
