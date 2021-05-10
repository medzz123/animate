export interface MenuProps {
  items?: MenuItem[];
}

interface MenuItem {
  /**
   * Label to be displayed inside the menu
   */
  label: string;
  /**
   * onClick handler triggered when label is clicked
   */
  onClick: () => void;
}
