export interface AccordionProps {
  /**
   * Data to display inside the accordions
   */
  data?: ItemProps[];
}

interface ItemProps {
  title: string;
  id: string;
  content: React.ReactNode;
}
