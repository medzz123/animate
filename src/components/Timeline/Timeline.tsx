import { Root } from '@radix-ui/react-tooltip';
import React, { FunctionComponent } from 'react';

import {
  ElementButton,
  ElementType,
  Frame,
  FramesContainer,
  Item,
  List,
  Overflow,
  StyledArrow,
  StyledContent,
  TimelineContainer,
  TooltipText,
} from './Timeline.styles';

const mockFrames = [
  {
    name: 'SomeLongClassName',
    type: 'div',
    frames: [0, 10, 50, 80],
    selected: true,
  },
  { name: 'Cube', type: 'div', frames: [], selected: false },
  { name: 'Star', type: 'div', frames: [50, 77], selected: false },
];

const Timeline: FunctionComponent = () => {
  return (
    <TimelineContainer data-testid="timeline">
      <List>
        {mockFrames.map((element) => (
          <Item key={element.name} selected={element.selected}>
            <ElementButton>
              <Overflow>
                <span>{element.name}</span>
              </Overflow>
              <ElementType>{element.type}</ElementType>
            </ElementButton>
            <FramesContainer>
              {element.frames.map((frame) => (
                <Root key={`frame@${frame}`} delayDuration={0}>
                  <Frame position={frame} />
                  <StyledContent side="top">
                    <TooltipText>{frame}%</TooltipText>
                    <StyledArrow />
                  </StyledContent>
                </Root>
              ))}
            </FramesContainer>
          </Item>
        ))}
      </List>
    </TimelineContainer>
  );
};

export default Timeline;
