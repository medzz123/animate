import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

import { useAnimationState } from '../../state/Animation/animation';
import {
  AnimationsManager,
  ArtboardContainer,
  GlobalFrameStyles,
  IFrame,
} from './Artboard.styles';

const Artboard: FunctionComponent = () => {
  const [contentRef, setContentRef] = useState(null);
  const { parsed, css, react } = useAnimationState();

  const mountNode = contentRef?.contentWindow?.document?.body;

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    contentRef?.addEventListener('load', forceUpdate);

    return () => {
      contentRef?.removeEventListener('load', forceUpdate);
    };
  }, [contentRef]);

  return (
    <ArtboardContainer data-testid="artboard">
      <IFrame title="Hello" frameBorder="0" ref={setContentRef}>
        <StyleSheetManager target={contentRef?.contentWindow?.document?.head}>
          <div>
            <GlobalFrameStyles />
            {mountNode &&
              createPortal(
                <AnimationsManager css={css} animations={parsed}>
                  <div id="main-container">{react}</div>
                </AnimationsManager>,
                mountNode
              )}
          </div>
        </StyleSheetManager>
      </IFrame>
    </ArtboardContainer>
  );
};

export default Artboard;
