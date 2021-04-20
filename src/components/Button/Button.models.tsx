import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  Partial<ButtonStyles>;

export interface ButtonStyles {
  variant: 'primary' | 'secondary';
  size: 'medium' | 'large' | 'icon';
}
