import { FC } from 'react';

import styles from 'components/FormControl/FormControl.module.scss';

import { InputProps } from '../types/formControlProps.type.ts';

const TextAreaInput: FC<InputProps> = ({ inputField }) => (
  <textarea className={styles.textAreaInput} {...inputField} />
);

export default TextAreaInput;
