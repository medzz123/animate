import { DialogOwnProps } from '@radix-ui/react-dialog';

export interface DialogProps {
  /**
   * Button label
   */
  label: string;
  onOpenChange?: DialogOwnProps['onOpenChange'];
  open?: boolean;
  close?: () => void;
}
