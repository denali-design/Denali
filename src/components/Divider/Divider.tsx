import { useRef } from 'react';
import Icon from '../Icon/Icon';
import { tv } from 'tailwind-variants';
import '../../App.css';

export type DividerColor =
  | 'default'
  | 'alt'
  | 'success'
  | 'success-vivid'
  | 'warning'
  | 'warning-vivid'
  | 'info'
  | 'info-vivid'
  | 'danger'
  | 'danger-vivid'
  | 'primary'
  | 'secondary';

export type LabelColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'on-vivid';

export type Justify = 'start' | 'center' | 'end';

export interface DividerProps {
  strokeColor?: DividerColor;
  icon?: string;
  label?: string;
  labelColor?: LabelColor;
  justify?: Justify;
}

const dividerBaseClass = 'relative flex items-center w-full py-4';

const colorVariants = tv({
  variants: {
    color: {
      default: 'type-type',
      primary: 'type-primary',
      success: 'type-success',
      warning: 'type-warning',
      danger: 'type-danger',
      info: 'type-info',
      'on-vivid': 'type-on-vivid'
    }
  },
  defaultVariants: {
    color: 'default'
  }
});

const Divider = ({
  strokeColor = 'default',
  icon,
  label,
  justify = 'center',
  labelColor = 'default'
}: DividerProps) => {
  const ref = useRef(null);

  // The order classes for the icon and label are set depending on the justify prop
  let iconAndLabelOrderClass;
  let firstHrOrderClass;
  let secondHrOrderClass;

  switch (justify) {
    case 'start':
      iconAndLabelOrderClass = 'order-1';
      firstHrOrderClass = 'order-2';
      secondHrOrderClass = 'order-3';
      break;
    case 'center':
      iconAndLabelOrderClass = 'order-2';
      firstHrOrderClass = 'order-1';
      secondHrOrderClass = 'order-3';
      break;
    case 'end':
      iconAndLabelOrderClass = 'order-3';
      firstHrOrderClass = 'order-1';
      secondHrOrderClass = 'order-2';
      break;
    default:
      // Default case is not necessary because 'justify' prop has a default value
      break;
  }

  const renderIcon = (iconName: string, color: LabelColor) => (
    <Icon name={iconName} size="sm" color={color} />
  );

  return (
    <div className={`${dividerBaseClass}`} ref={ref}>
      <hr
        className={`border-t-2 ${
          strokeColor ? `stroke-${strokeColor}` : 'stroke'
        } w-full ${firstHrOrderClass}`}
        aria-label={label ? label : 'Divider'}
      />
      {icon && (
        <div
          className={`flex-shrink-0 px-2 ${colorVariants({
            color: labelColor
          })} ${iconAndLabelOrderClass}`}
        >
          {renderIcon(icon, labelColor)}
        </div>
      )}
      {label && (
        <p
          className={`flex-shrink-0 px-2 ${colorVariants({
            color: labelColor
          })} ${iconAndLabelOrderClass}`}
        >
          {label}
        </p>
      )}
      {(label || icon) && (
        <hr
          className={`border-t-2 ${
            strokeColor ? `stroke-${strokeColor}` : 'stroke'
          } w-full ${secondHrOrderClass}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Divider;
export { Divider };
