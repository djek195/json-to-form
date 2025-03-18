import { FC } from 'react';

import cx from 'classnames';
import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const DateInput: FC<InputProps> = ({ inputField }) => (
  <input
    className={cx(styles.formControl, styles.dateInput)}
    type="date"
    {...inputField}
  />
);

export default DateInput;
