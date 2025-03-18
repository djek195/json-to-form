import { FC } from 'react';

import cx from 'classnames';
import { ButtonType } from 'core/enums/button-type.enum.ts';
import { ButtonVariant } from 'core/enums/button-variant.enum.ts';

import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  type?: ButtonType;
  disabled?: boolean;
  text: string;
  theme?: ButtonVariant;
  className?: string;
}

const { PRIMARY, TAB, CANCEL } = ButtonVariant;
const { BUTTON } = ButtonType;

const Button: FC<ButtonProps> = ({
  onClick,
  type = BUTTON,
  text,
  disabled = false,
  theme = PRIMARY,
  className,
}) => {
  const buttonClassName = cx(
    styles.button,
    {
      [styles.primary]: theme === PRIMARY,
      [styles.tab]: theme === TAB,
      [styles.cancel]: theme === CANCEL,
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
