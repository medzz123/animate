export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  Partial<ButtonStyles>;

export interface ButtonStyles {
  variant: 'primary' | 'secondary';
  size: 'medium' | 'large';
}
