import { FunctionComponent } from 'react';
import MonacoEditor from 'react-monaco-editor';

import { tokens } from '../../theme/tokens';
import { EditorProps } from './Editor.models';
import { EditorContainer } from './Editor.styles';

const Editor: FunctionComponent<EditorProps> = (props) => {
  const { value, onChange, language } = props;

  return (
    <EditorContainer data-testid="editor">
      <MonacoEditor
        language={language}
        height={tokens.sizes['3xs']}
        theme="vs-dark"
        value={value}
        options={{
          minimap: {
            enabled: false,
          },
          lineNumbers: 'off',
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
        }}
        onChange={onChange}
      />
    </EditorContainer>
  );
};

export default Editor;
