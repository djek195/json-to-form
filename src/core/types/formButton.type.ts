import { ButtonType } from 'core/enums/button-type.enum.ts';

export interface FormButton {
  label: string;
  type: ButtonType;
  action?: string;
}
