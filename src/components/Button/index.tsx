import { FC } from 'react';

import cx from 'classnames';
import { ButtonTypes } from 'core/enums/button-types.enum.ts';
import { ButtonVariants } from 'core/enums/button-variants.enum.ts';

import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  type?: ButtonTypes;
  disabled?: boolean;
  text: string;
  theme?: ButtonVariants;
  className?: string;
}

const { PRIMARY, TAB, CANCEL } = ButtonVariants;
const { BUTTON } = ButtonTypes;

const Button: FC<ButtonProps> = ({
  onClick,
  type = BUTTON,
  text,
  disabled = false,
  theme = PRIMARY,
  className,
}) => {
  const { button, primary, tab, cancel } = styles;
  const buttonClassName = cx(
    button,
    {
      [primary]: theme === PRIMARY,
      [tab]: theme === TAB,
      [cancel]: theme === CANCEL,
    },
    className,
  );

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
