import { FormButton } from 'core/types/formButton.type.ts';
import { FormField } from 'core/types/formField.type.ts';

export interface FormConfig {
  title?: string;
  items: FormField[];
  buttons?: FormButton[];
}
