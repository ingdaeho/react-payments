import { PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'span'> {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
}

const Button = ({
  variant = 'text',
  disabled = false,
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={classNames(`button-${variant}`, className, { disabled })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
