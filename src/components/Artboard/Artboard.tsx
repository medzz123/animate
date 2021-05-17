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

/**
 * Scalable artboard component which contains the iframe containing the animations
 */
const Artboard: FunctionComponent = () => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement>(null);
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

  /**
   * Force render the component after initial mount to load iframe
   * with react content inside. Due to mozilla bug, it is necessary to do so
   */
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const head = doc?.head;

  /**
   * Run the force update code
   */
  useEffect(() => {
    contentRef?.addEventListener('load', forceUpdate);

    return () => {
      contentRef?.removeEventListener('load', forceUpdate);
    };
  }, [contentRef]);

  /**
   * Removing cache control from css, so old properties and animations
   * are not kept when users remove them
   */
  useEffect(() => {
    if (doc && head) {
      const cacheControlMeta = doc.createElement('meta');

      cacheControlMeta.httpEquiv = 'cache-control';
      cacheControlMeta.content = 'no-cache';

      const expiresMeta = doc.createElement('meta');

      expiresMeta.httpEquiv = 'expires';
      expiresMeta.content = '0';

      const pragmaMeta = doc.createElement('meta');

      pragmaMeta.httpEquiv = 'pragma';
      pragmaMeta.content = 'no-cache';

      head.append(cacheControlMeta);
      head.append(expiresMeta);
      head.append(pragmaMeta);
    }
  }, [head, doc]);

  return (
    <ArtboardContainer data-testid="artboard" id="parent">
      <AspectRatio
        parentWidth={state.containerWidth}
        parentHeight={state.containerHeight}
        artboardWidth={width}
        artboardHeight={height}
      >
        <IFrame title="Hello" frameBorder="0" ref={setContentRef}>
          <StyleSheetManager target={head}>
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
                      {react}
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
