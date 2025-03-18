import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/Button';
import FormControl from 'components/FormControl';
import { DefaultFormTitle } from 'core/constants/text-consts.ts';
import { ButtonType } from 'core/enums/button-type.enum.ts';
import { ButtonVariant } from 'core/enums/button-variant.enum.ts';
import { FormConfig } from 'core/types/formConfig.type.ts';

import styles from './ResultTab.module.scss';

interface ResultTabProps {
  config: FormConfig;
  setActive: () => void;
}

const ResultTab: FC<ResultTabProps> = ({ config, setActive }) => {
  const { CANCEL } = ButtonVariant;
  const { BUTTON } = ButtonType;
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, unknown>) => {
    console.log('Form Data:', data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>{config.title || DefaultFormTitle}</h1>
      <div className={styles.inputs}>
        {config.items.map((field) => (
          <FormControl key={field.label} field={field} control={control} />
        ))}
      </div>
      <div className={styles.buttons}>
        {config.buttons?.map((btn) =>
          btn.type === BUTTON ? (
            <Button
              key={btn.label}
              text={btn.label}
              onClick={setActive}
              theme={CANCEL}
            />
          ) : (
            <Button
              key={btn.label}
              text={btn.label}
              type={btn.type}
              onClick={() => {}}
            />
          ),
        )}
      </div>
    </form>
  );
};

export default ResultTab;
