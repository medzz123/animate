import { tokens } from '@theme/tokens';

export type ResponsiveProps<T> = {
  [prop in keyof T]:
    | T[prop]
    | { [key in keyof typeof tokens.breakpoints]?: T[prop] };
};
