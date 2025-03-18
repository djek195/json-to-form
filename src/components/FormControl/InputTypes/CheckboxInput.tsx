import { FC } from 'react';

import cx from 'classnames';
import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const CheckboxInput: FC<InputProps> = ({ inputField }) => (
  <input
    className={cx(styles.formControl, styles.checkboxInput)}
    type="checkbox"
    {...inputField}
  />
);

export default CheckboxInput;
