import { FC, useMemo } from 'react';

import Editor from '@monaco-editor/react';
import Button from 'components/Button';
import { FormConfig } from 'core/types/formConfig.type.ts';
import { debounce } from 'lodash';

import styles from './ConfigTab.module.scss';

const editorOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
};

interface ConfigTabProps {
  config: FormConfig;
  setConfig: (config: FormConfig) => void;
  setActive: () => void;
}

const ConfigTab: FC<ConfigTabProps> = ({ config, setConfig, setActive }) => {
  const formattedConfig = useMemo(
    () => JSON.stringify(config, null, 2),
    [config],
  );

  const parseConfig = (value: string | undefined): FormConfig => {
    try {
      return value ? JSON.parse(value) : { title: '', items: [], buttons: [] };
    } catch (error) {
      console.error('Invalid JSON:', error);
      return config;
    }
  };

  const debouncedSetConfig = debounce(
    (value: string | undefined) => setConfig(parseConfig(value)),
    350,
  );

  const handleChange = (value: string | undefined) => {
    debouncedSetConfig(value);
  };

  const handleApply = () => {
    if (Object.keys(config).length > 0) {
      setActive();
    }
  };

  return (
    <div className={styles.wrapper}>
      <Editor
        className={styles.editor}
        defaultLanguage="json"
        value={formattedConfig}
        onChange={handleChange}
        options={editorOptions}
        theme={'vs-dark'}
      />
      <Button onClick={handleApply} text="Apply" />
    </div>
  );
};

export default ConfigTab;
