import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useInputContext } from './useInput';

export interface Props extends ComponentPropsWithRef<'input'> {
  type?: ComponentPropsWithRef<'input'>['type'];
  variant?: 'basic' | 'underline';
  error?: boolean;
}

export const InputBase = forwardRef(
  (
    { type = 'text', variant = 'basic', error, className, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { setHasError } = useInputContext();

    const handleBlur = () => {
      if (error) {
        setHasError(true);
      }
    };

    const handleFocus = () => {
      setHasError(false);
    };

    return (
      <input
        ref={ref}
        type={type}
        className={classNames(`input-${variant}`, className)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...rest}
      />
    );
  }
);

InputBase.displayName = '@Input/InputBase';
