import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import { FormField } from 'core/types/formField.type.ts';

import styles from './FormControl.module.scss';
import InputTypes from './InputTypes';

interface FormControlProps {
  field: FormField;
  control: Control;
}

const FormControl: FC<FormControlProps> = ({ field, control }) => {
  const InputComponent = InputTypes[field.type];

  return (
    <div className={styles.inputWrapper} key={field.label}>
      <label className={styles.label}>{field.label}</label>
      <Controller
        name={field.label}
        control={control}
        render={({ field: inputField }) => (
          <InputComponent inputField={inputField} options={field.options} />
        )}
      />
    </div>
  );
};

export default FormControl;
