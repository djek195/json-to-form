import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface InputProps {
  inputField: ControllerRenderProps<FieldValues, string>;
  options?: string[];
}
