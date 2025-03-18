import CheckboxInput from './CheckboxInput.tsx';
import DateInput from './DateInput.tsx';
import EnumInput from './EnumInput.tsx';
import NumberInput from './NumberInput.tsx';
import TextAreaInput from './TextAreaInput.tsx';
import TextInput from './TextInput.tsx';

const inputTypes = {
  number: NumberInput,
  string: TextInput,
  'multi-line': TextAreaInput,
  boolean: CheckboxInput,
  date: DateInput,
  enum: EnumInput,
};

export default inputTypes;
