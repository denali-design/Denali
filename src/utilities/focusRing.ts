import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export const focusRing = tv({
  base: '',
  variants: {
    isFocusVisible: {
      true: 'border-2 ring ring-2 ring-blue-600 ring-offset-2 stroke-primary'
    },
    isFocused: {
      true: 'border-2 stroke-primary'
    }
  }
});

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
