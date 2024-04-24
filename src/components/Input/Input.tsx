import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentPropsWithRef<'input'> {
  type?: ComponentPropsWithRef<'input'>['type'];
  variant?: 'basic' | 'underline';
}

const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = 'text', variant = 'basic', className, ...rest } = props;
    return (
      <input
        ref={ref}
        type={type}
        className={classNames(`input-${variant}`, className)}
        {...rest}
      />
    );
  }
);

export default Input;
