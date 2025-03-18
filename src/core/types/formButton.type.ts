import { ButtonTypes } from 'core/enums/button-types.enum.ts';

export interface FormButton {
  label: string;
  type: ButtonTypes;
  action?: string;
}
