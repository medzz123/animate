import { ThemeController } from '../../theme/themeController';

export interface SettingsProps {
  toggle: ThemeController['toggleTheme'];
  theme: ThemeController['state'];
}
