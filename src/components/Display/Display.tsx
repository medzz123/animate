import parse from 'html-react-parser';
import React, { FunctionComponent, useMemo } from 'react';

import { AnimationState } from '../../state/Animation/animation.models';
import { parseElements } from '../../utils/ParseAnimations';
import { useBox } from '../../utils/UseBox';
import { DisplayProps } from './Display.models';
import {
  DisplayAnimations,
  DisplayContainer,
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

    const parsedAnimation = parseElements(animation.elements);

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
      animations: parsedAnimation,
    };
  }, [animationKey]);

  console.log('box', box);

  return (
    <DisplayContainer data-testid="display">
      {/* @ts-ignore */}
      <DisplayRatio artboardWidth={width} artboardHeight={height} ref={ref}>
        <DisplayAnimations css={css} nodes={nodes} animations={animations}>
          <DisplaySize
            artboardWidth={width}
            // @ts-ignore
            width={box}
            artboardHeight={height}
          >
            <div id="main-container">{jsx}</div>
          </DisplaySize>
        </DisplayAnimations>
      </DisplayRatio>
    </DisplayContainer>
  );
};

export default Display;
