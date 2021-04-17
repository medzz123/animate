import React, { FunctionComponent } from 'react';
import { IoIosSettings } from 'react-icons/io';

import { themes } from '../../theme/theme';
import { useSettingsState } from './Settings.hooks';
import { SettingsProps } from './Settings.models';
import {
  Color,
  ColorContainer,
  SettingsButton,
  SettingsContainer,
  SettingsContent,
} from './Settings.styles';

const Settings: FunctionComponent<SettingsProps> = (props) => {
  const { state, handlers } = useSettingsState();
  const { themeController } = props;

  return (
    <SettingsContainer data-testid="settings" active={state}>
      <SettingsContent>
        <h3>Color switcher</h3>
        <ColorContainer>
          {Object.keys(themes).map((theme) => (
            <Color
              key={`theme-${theme}`}
              color={themes[theme].background}
              active={themeController.themeName === theme}
              onClick={() => themeController.setTheme(theme)}
            />
          ))}
        </ColorContainer>
      </SettingsContent>
      <SettingsButton onClick={handlers().toggle} active={state}>
        <IoIosSettings size="32px" />
      </SettingsButton>
    </SettingsContainer>
  );
};

export default Settings;
