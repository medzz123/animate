import { tokens } from '@theme/tokens';
import dynamic from 'next/dynamic';
import { FunctionComponent } from 'react';
import Skeleton from 'react-loading-skeleton';

import { EditorProps } from './Editor.models';
import { EditorContainer } from './Editor.styles';

const MonacoEditor = dynamic(import('react-monaco-editor'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Skeleton height={tokens.sizes['3xs']} />,
});

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
        editorDidMount={() => {
          // @ts-ignore
          window.MonacoEnvironment.getWorkerUrl = (
            _: unknown,
            label: string
          ) => {
            if (label === 'json') return '/_next/static/json.worker.js';
            if (label === 'css') return '/_next/static/css.worker.js';
            if (label === 'html') return '/_next/static/html.worker.js';
            if (label === 'scss') return '/_next/static/ts.worker.js';
            return '/_next/static/editor.worker.js';
          };
        }}
      />
    </EditorContainer>
  );
};

export default Editor;
