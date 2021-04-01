import SettingsIcon from '@material-ui/icons/Settings';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

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
  const { darkMode } = props;

  return (
    <SettingsContainer data-testid="settings" active={state} className="flip">
      <SettingsContent>
        <h3>Color switcher</h3>
        <ColorContainer>
          <Color
            color="#ffffff"
            active={darkMode.value === false}
            onClick={darkMode.disable}
          />
          <Color
            color="#000000"
            active={darkMode.value === true}
            onClick={darkMode.enable}
          />
        </ColorContainer>
        <Link href="/testing-grounds">
          <a>Testing Grounds</a>
        </Link>
      </SettingsContent>
      <SettingsButton onClick={handlers().toggle} active={state}>
        <SettingsIcon />
      </SettingsButton>
    </SettingsContainer>
  );
};

export default Settings;
