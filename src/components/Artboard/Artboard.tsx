import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

import { useAnimationState } from '../../state/Animation/animation';
import { useArtboardState } from '../../state/artboard';
import {
  AnimationsManager,
  ArtboardContainer,
  ArtboardSize,
  AspectRatio,
  GlobalFrameStyles,
  IFrame,
} from './Artboard.styles';

const Artboard: FunctionComponent = () => {
  const [contentRef, setContentRef] = useState(null);
  const {
    parsed,
    css,
    react,
    width,
    height,
    nodes,
    playState,
  } = useAnimationState();
  const { state } = useArtboardState();

  const mountNode = contentRef?.contentWindow?.document?.body;

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    contentRef?.addEventListener('load', forceUpdate);

    return () => {
      contentRef?.removeEventListener('load', forceUpdate);
    };
  }, [contentRef]);

  return (
    <ArtboardContainer data-testid="artboard" id="parent">
      <AspectRatio
        parentWidth={state.containerWidth}
        parentHeight={state.containerHeight}
        artboardWidth={width}
        artboardHeight={height}
      >
        <IFrame title="Hello" frameBorder="0" ref={setContentRef}>
          <StyleSheetManager target={contentRef?.contentWindow?.document?.head}>
            <div>
              <GlobalFrameStyles />
              {mountNode &&
                createPortal(
                  <ArtboardSize
                    artboardWidth={width}
                    artboardHeight={height}
                    scale={state.scale}
                  >
                    <AnimationsManager
                      nodes={nodes}
                      playState={playState}
                      css={css}
                      animations={parsed}
                    >
                      <div id="main-container">{react}</div>
                    </AnimationsManager>
                  </ArtboardSize>,
                  mountNode
                )}
            </div>
          </StyleSheetManager>
        </IFrame>
      </AspectRatio>
    </ArtboardContainer>
  );
};

export default Artboard;
