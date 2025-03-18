import { FC } from 'react';

import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const DateInput: FC<InputProps> = ({ inputField }) => (
  <input className={styles.dateInput} type="date" {...inputField} />
);

export default DateInput;
