import { FC } from 'react';

import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const NumberInput: FC<InputProps> = ({ inputField }) => (
  <input className={styles.numberInput} type="number" {...inputField} />
);

export default NumberInput;
