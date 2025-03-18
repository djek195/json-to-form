import { FC } from 'react';

import { InputProps } from '../types/formControlProps.type.ts';

const EnumInput: FC<InputProps> = ({ inputField, options }) => (
  <>
    {options?.map((option) => (
      <label key={option}>
        <input type="radio" {...inputField} value={option} />
        {option}
      </label>
    ))}
  </>
);

export default EnumInput;
