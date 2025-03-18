import { FieldType } from 'core/types/fieldTypes.type.ts';

export interface FormField {
  label: string;
  type: FieldType;
  options?: string[];
}
