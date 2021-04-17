import React, { FunctionComponent } from 'react';

import { useAnimationState } from '../../state/Animation/animation';
import {
  Frame,
  FramesContainer,
  Item,
  List,
  NameContainer,
  Overflow,
  TimelineContainer,
} from './Timeline.styles';

const Timeline: FunctionComponent = () => {
  const { state, setElement, setStep, currentStep } = useAnimationState();

  return (
    <TimelineContainer data-testid="timeline">
      <List>
        {Object.keys(state.elements).map((key) => (
          <Item
            key={key}
            selected={key === state.element}
            onClick={() => {
              setElement(key);
            }}
          >
            <NameContainer>
              <Overflow>
                <span>{key}</span>
              </Overflow>
            </NameContainer>
            <FramesContainer>
              {Object.keys(state.elements[key].steps).map((frame) => (
                <Frame
                  selected={
                    key === state.element && Number(frame) === currentStep
                  }
                  key={`frame@${frame}`}
                  position={frame}
                  type="button"
                  onClick={() => {
                    setStep(Number(frame));
                  }}
                />
              ))}
            </FramesContainer>
          </Item>
        ))}
      </List>
    </TimelineContainer>
  );
};

export default Timeline;
