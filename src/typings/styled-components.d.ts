import { defaultTheme } from '@theme/theme';

type ThemeInterface = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
