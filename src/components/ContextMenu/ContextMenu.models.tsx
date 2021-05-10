export interface ContextMenuProps {
  items?: ContextMenuItem[];
}

interface ContextMenuItem {
  /**
   * Label to be displayed inside the menu
   */
  label: string;
  /**
   * onClick handler triggered when label is clicked
   */
  onClick: () => void;
}
