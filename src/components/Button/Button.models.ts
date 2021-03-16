export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<ButtonStyles> {
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface ButtonStyles {
  variant: 'primary' | 'secondary';
  size: 'medium' | 'large';
}
