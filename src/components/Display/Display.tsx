import parse from 'html-react-parser';
import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheetManager } from 'styled-components';

import { AnimationState } from '../../state/Animation/animation.models';
import { parseElements } from '../../utils/ParseAnimations';
import { useBox } from '../../utils/UseBox';
import { GlobalFrameStyles } from '../Artboard/Artboard.styles';
import { DisplayProps } from './Display.models';
import {
  DisplayAnimations,
  DisplayContainer,
  DisplayFrame,
  DisplayRatio,
  DisplaySize,
} from './Display.styles';

const Display: FunctionComponent<DisplayProps> = (props) => {
  const { animationKey } = props;
  const [box, ref] = useBox();

  const { css, jsx, nodes, animations, width, height } = useMemo(() => {
    const animation = JSON.parse(
      window.localStorage.getItem(animationKey)
    ) as AnimationState;

    const { mergeKeyframes, mergeControls } = parseElements({
      elements: animation.elements,
    });

    const nodes = animation.markup
      .match(/id="(.*?)"/g)
      .map((val) => {
        return val.replace(/id="/g, '#').replace(`"`, '');
      })
      .join(', ');

    return {
      css: animation.css,
      nodes,
      jsx: parse(animation.markup),
      width: animation.width,
      height: animation.height,
      animations: mergeKeyframes + mergeControls,
    };
  }, [animationKey]);

  const [contentRef, setContentRef] = useState(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    contentRef?.addEventListener('load', forceUpdate);

    return () => {
      contentRef?.removeEventListener('load', forceUpdate);
    };
  }, [contentRef]);

  return (
    <DisplayContainer data-testid="display">
      <DisplayRatio
        artboardWidth={width}
        artboardHeight={height}
        // @ts-ignore
        ref={ref}
      >
        <DisplayFrame title="Hello" frameBorder="0" ref={setContentRef}>
          <StyleSheetManager target={contentRef?.contentWindow?.document?.head}>
            <div>
              <GlobalFrameStyles />
              {mountNode &&
                createPortal(
                  <DisplaySize
                    artboardWidth={width}
                    artboardHeight={height}
                    // @ts-ignore
                    width={box}
                  >
                    <DisplayAnimations
                      nodes={nodes}
                      css={css}
                      animations={animations}
                    >
                      {jsx}
                    </DisplayAnimations>
                  </DisplaySize>,
                  mountNode
                )}
            </div>
          </StyleSheetManager>
        </DisplayFrame>
      </DisplayRatio>
    </DisplayContainer>
  );
};

export default Display;
