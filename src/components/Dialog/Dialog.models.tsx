import { DialogOwnProps } from '@radix-ui/react-dialog';
import { IconType } from 'react-icons';

export interface DialogProps {
  /**
   * Button label
   */
  label: string;
  onOpenChange?: DialogOwnProps['onOpenChange'];
  open?: boolean;
  close?: () => void;
  setOpen?: () => void;
  button?: boolean;
  Icon?: IconType;
}
