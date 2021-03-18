import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

import { highlight, languages } from 'prismjs/components/prism-core';
import { FunctionComponent, useState } from 'react';
import SimpleEditor from 'react-simple-code-editor';

import { EditorProps } from './Editor.models';
import { EditorContainer } from './Editor.styles';

const Editor: FunctionComponent<EditorProps> = (props) => {
  const { uga, buga } = props;

  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  return (
    <EditorContainer
      data-testid="editor"
      style={{ backgroundColor: 'red', width: 400, height: 400 }}
    >
      <SimpleEditor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
      />
    </EditorContainer>
  );
};

export default Editor;
