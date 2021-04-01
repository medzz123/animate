export interface SelectProps {
  /**
   * Options in the select
   **/
  options?: Option[];
  /**
   * Selected option
   **/
  selected?: Option;
  /**
   * On Change when item is selected
   */
  onChange?: (value: Option) => void;
}

interface Option {
  value: string;
  label: string;
}
