import { FC } from 'react';

import cx from 'classnames';
import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const TextAreaInput: FC<InputProps> = ({ inputField }) => (
  <textarea
    className={cx(styles.formControl, styles.textAreaInput)}
    {...inputField}
  />
);

export default TextAreaInput;
