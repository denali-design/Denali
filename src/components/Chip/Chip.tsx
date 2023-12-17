/**
 * @file This file defines the Chip component, meant to display important messages in a noticeable way.
 * @since 1.0.0
 */

import Icon from '../Icon/Icon';
import '../../assets/css/App.css';
import './Chip.css';

export type ChipType = 'info' | 'success' | 'warning' | 'danger';
export type reverseIcon = true | false
type IconColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'on-vivid';

export interface ChipProps {
  type?: ChipType;
  className?: string;
  message: string;
  iconName?: string;
  reverseIcon?: boolean;
}

const Chip = ({
  type,
  className,
  message,
  iconName,
  reverseIcon = false // Default value set to false
}: ChipProps) => {
  let chipClass;
  let iconColor: IconColor;

  switch (type) {
    case 'info':
      chipClass = 'chip--info';
      iconColor = 'info';
      break;
    case 'success':
      chipClass = 'chip--success ';
      iconColor = 'success';
      break;
    case 'warning':
      chipClass = 'chip--warning';
      iconColor = 'warning';
      break;
    case 'danger':
      chipClass = 'chip--danger';
      iconColor = 'danger';
      break;
    default:
      chipClass = 'chip--default';
      iconColor = 'default';
  }

  let chipReversedClass;
  if (reverseIcon) {
    chipReversedClass = 'chip--reversed';
  }

  return (
    <div className={`chip ${chipClass} ${chipReversedClass ?? ''} ${className ?? ''}`}>
      {iconName && <Icon color={iconColor} name={iconName} size="sm" />}
      <p>{message}</p>
    </div>
  );
};

export default Chip;
