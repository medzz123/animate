import React from 'react';

import { ArtboardWrapper, Board, Zoom } from './Artboard.styles';

interface Elements {
  name: string;
  type: string;
}

const Artboard: React.FunctionComponent = () => {
  const [elements, setElements] = React.useState<Elements[]>([]);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  return (
    <ArtboardWrapper>
      <p>Artboard</p>
      <input value={zoomLevel} onChange={(e) => setZoomLevel(e.target.value)} />
      <button
        onClick={() => {
          setElements((elements) => [
            ...elements,
            { name: 'new one', type: 'button' },
          ]);
        }}
      >
        Create element
      </button>
      <Board>
        <Zoom scale={zoomLevel}>
          {elements.map(({ name, type }) => {
            return React.createElement(type, { className: name }, ['name']);
          })}
        </Zoom>
      </Board>
    </ArtboardWrapper>
  );
};

export default Artboard;
