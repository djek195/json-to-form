import { FC } from 'react';

import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const TextInput: FC<InputProps> = ({ inputField }) => (
  <input className={styles.textInput} type="text" {...inputField} />
);

export default TextInput;
