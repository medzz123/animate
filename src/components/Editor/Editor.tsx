/* eslint-disable */
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-scss';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';
/* eslint-enable */
import { FunctionComponent } from 'react';

import { EditorProps } from './Editor.models';
import { EditorContainer } from './Editor.styles';
import { tokens } from '../../theme/tokens';

const Editor: FunctionComponent<EditorProps> = (props) => {
  const { value, onChange, language } = props;

  return (
    <EditorContainer data-testid="editor">
      <AceEditor
        mode={language}
        theme="dracula"
        value={value}
        height={tokens.sizes['3xs']}
        width={tokens.sizes.full}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </EditorContainer>
  );
};

export default Editor;
