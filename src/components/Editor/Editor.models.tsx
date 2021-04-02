export interface EditorProps {
  /**
   * Value displayed in Monaco
   **/
  value: string;
  /**
   * OnChange from Monaco
   **/
  onChange: (value: string) => void;
  /**
   * Language to parse for syntax highlighting
   */
  language: 'scss' | 'html';
}
