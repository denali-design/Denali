/**
 * Defines the NumberField component.
 *
 * @file This file defines the NumberField component, meant to be a reusable and accessible number input field.
 * @since 1.0.0
 */

import {
  NumberField as AriaNumberField,
  Label,
  Group,
  Input,
  Button
} from 'react-aria-components';
import type {
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult
} from 'react-aria-components';
import { FieldError, Text } from 'react-aria-components';
import Icon from '../Icon/Icon';
import '../../assets/css/App.css';
import '../../assets/css/common-styles/forms/inputs.css';

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function NumberField({
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField className="number-field" {...props}>
      <div className="form-group">
        <Label className="form-group__label form-group__label--static">
          {label}
        </Label>
        <Group className="input-group has-value-stroke">
          <Button className="number-field__button" slot="decrement">
            <Icon color="default" name="icon-control-remove" size="sm" />
          </Button>
          <Input className="form-group__input px-2" placeholder="" />
          <Button className="number-field__button" slot="increment">
            <Icon color="default" name="icon-control-add" size="sm" />
          </Button>
        </Group>
      </div>
      {description && (
        <Text className="input-description" slot="description">
          {description}
        </Text>
      )}
      <FieldError className="input-error">{errorMessage}</FieldError>
    </AriaNumberField>
  );
}

export default NumberField;
