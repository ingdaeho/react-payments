import {
  ComponentPropsWithRef,
  forwardRef,
  FocusEvent,
  FocusEventHandler,
} from 'react';
import classNames from 'classnames';
import { useInputContext } from './useInput';

export interface Props extends ComponentPropsWithRef<'input'> {
  type?: ComponentPropsWithRef<'input'>['type'];
  variant?: 'basic' | 'underline';
  isError?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const InputBase = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    type = 'text',
    variant = 'basic',
    isError = false,
    onFocus,
    onBlur,
    className,
    ...rest
  } = props;
  const { setHasError } = useInputContext();

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (onFocus) onFocus(event);
    setHasError(false);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    if (onBlur) onBlur(event);
    setHasError(isError);
  };

  return (
    <input
      ref={ref}
      type={type}
      className={classNames(`input-${variant}`, className)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
});

InputBase.displayName = 'InputBase';
