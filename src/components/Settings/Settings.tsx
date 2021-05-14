import React, { FunctionComponent } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { SettingsProps } from './Settings.models';
import { SettingsContainer } from './Settings.styles';

const Settings: FunctionComponent<SettingsProps> = (props) => {
  const { toggle, theme } = props;

  return (
    <SettingsContainer data-testid="settings" type="button" onClick={toggle}>
      {theme ? <FaSun /> : <FaMoon />}
    </SettingsContainer>
  );
};

export default Settings;
