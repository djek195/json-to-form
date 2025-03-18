import { useState } from 'react';

import Button from 'components/Button';
import ConfigTab from 'components/ConfigTab';
import ResultTab from 'components/ResultTab';
import { ButtonTypes } from 'core/enums/button-types.enum.ts';
import { ButtonVariants } from 'core/enums/button-variants.enum';
import { TabsOptions } from 'core/enums/tabs-options.enum.ts';
import { FormConfig } from 'core/types/formConfig.type.ts';

import styles from './Tabs.module.scss';

const Tabs = () => {
  const { TAB } = ButtonVariants;
  const { BUTTON } = ButtonTypes;
  const { CONFIG, RESULT } = TabsOptions;
  const [activeTab, setActiveTab] = useState<TabsOptions>(CONFIG);
  const [config, setConfig] = useState<FormConfig>({
    title: 'Generated Form',
    items: [],
    buttons: [{ label: 'Back', type: BUTTON }],
  });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        <li className={styles.tab}>
          <Button
            onClick={() => setActiveTab(CONFIG)}
            text={CONFIG}
            theme={TAB}
            className={activeTab === CONFIG ? styles.active : ''}
          />
        </li>
        <li>
          <Button
            onClick={() => setActiveTab(RESULT)}
            text={RESULT}
            theme={TAB}
            className={activeTab === RESULT ? styles.active : ''}
          />
        </li>
      </ul>
      <div className={styles.content}>
        {activeTab === CONFIG ? (
          <ConfigTab
            config={config}
            setConfig={setConfig}
            setActive={() => setActiveTab(RESULT)}
          />
        ) : (
          <ResultTab config={config} setActive={() => setActiveTab(CONFIG)} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
