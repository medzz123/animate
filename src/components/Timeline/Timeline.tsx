import React, { FunctionComponent } from 'react';
import { VscClose } from 'react-icons/vsc';
import { useTheme } from 'styled-components';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import {
  DeleteButton,
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
    deleteElement,
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
              <DeleteButton
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteElement(key);
                }}
              >
                <VscClose size="20px" color={theme.paragraph} />
              </DeleteButton>
            ) : (
              <Box minWidth={48} height={24} />
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
