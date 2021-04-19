import React, { FunctionComponent } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { SettingsProps } from './Settings.models';
import { SettingsContainer } from './Settings.styles';

const Settings: FunctionComponent<SettingsProps> = (props) => {
  const { themeController } = props;

  return (
    <SettingsContainer
      data-testid="settings"
      type="button"
      onClick={themeController.toggleTheme}
    >
      {themeController.state ? <FaSun /> : <FaMoon />}
    </SettingsContainer>
  );
};

export default Settings;
