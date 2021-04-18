import React, { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';
import { useTheme } from 'styled-components';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import {
  Frame,
  FramesContainer,
  Item,
  List,
  Overflow,
  TimelineContainer,
} from './Timeline.styles';

const Timeline: FunctionComponent = () => {
  const {
    state,
    setElement,
    setStep,
    currentStep,
    deleteCurrentElement,
  } = useAnimationState();

  const theme = useTheme();

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
            <Overflow>{key}</Overflow>
            {key !== state.element ? (
              <button type="button" onClick={deleteCurrentElement}>
                <VscClose size="20px" color={theme.paragraph} />
              </button>
            ) : (
              <Box minWidth={20} height={24} />
            )}
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
