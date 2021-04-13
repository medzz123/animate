import React from 'react';

import { useUndo } from './Undo.hook';
import { Container, Content } from './Undo.styles';

const Undo: React.FunctionComponent = () => {
  const { state, handlers } = useUndo([1, 2, 3, 4, 5]);

  return (
    <Container>
      <Content>
        <p>Hello, this page us Undo</p>
        <button
          onClick={() => {
            handlers.set([...state.present, Math.random()]);
          }}
        >
          add item to list
        </button>
        <button onClick={handlers.undo}>go back</button>
        <button onClick={handlers.redo}>go forward</button>

        {state.present.map((m) => (
          <div key={m}>
            <p>{m}</p>
          </div>
        ))}
      </Content>
    </Container>
  );
};

export default Undo;
