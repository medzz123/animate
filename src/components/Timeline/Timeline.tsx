import React, { FunctionComponent, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { TiPlus } from 'react-icons/ti';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Flex from '../Box/Flex';
import Pause from '../Icons/Pause';
import Play from '../Icons/Play';
import Stop from '../Icons/Stop';
import { TimelineProps } from './Timeline.models';
import {
  ActionsContainer,
  Frame,
  FramesContainer,
  Item,
  List,
  Overflow,
  PillButton,
  PillInput,
  PillInputContainer,
  PlayStateButtons,
  TimelineContainer,
  TimelineText,
} from './Timeline.styles';

const Timeline: FunctionComponent<TimelineProps> = (props) => {
  const {
    state,
    setElement,
    setStep,
    currentStep,
    togglePlayState,
    playState,
    addStep,
  } = useAnimationState();
  const { handleReset } = props;

  const [newStep, setNewStep] = useState('');

  return (
    <TimelineContainer data-testid="timeline">
      <ActionsContainer>
        <Flex>
          <PlayStateButtons onClick={togglePlayState}>
            {playState === 'paused' ? <Pause /> : <Play />}
          </PlayStateButtons>
          <Box width={40} />
          <PlayStateButtons onClick={handleReset}>
            <Stop />
          </PlayStateButtons>
        </Flex>
      </ActionsContainer>
      <List>
        {Object.keys(state.elements).map((key) => (
          <Item
            key={key}
            selected={key === state.element}
            onClick={() => {
              setElement(key);
            }}
          >
            <Flex alignItems="center" marginBottom={16}>
              <Overflow>{key}</Overflow>
              {key !== state.element && (
                <button
                  style={{
                    marginLeft: 8,
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                  }}
                >
                  <CgClose size="12" color="#BDBDBD" />
                </button>
              )}
            </Flex>

            <Flex alignItems="center" marginBottom={8}>
              <TimelineText>Timeline</TimelineText>
              <FramesContainer>
                {Object.keys(state.elements[key].steps).map((frame) => (
                  <Frame
                    key={`frame@${frame}`}
                    selected={
                      key === state.element && Number(frame) === currentStep
                    }
                    position={frame}
                    type="button"
                    onClick={() => {
                      setStep(Number(frame));
                    }}
                  />
                ))}
              </FramesContainer>
            </Flex>

            {key === state.element && (
              <Flex alignItems="center">
                <TimelineText>Add step</TimelineText>
                <PillInputContainer>
                  <PillInput
                    maxLength={3}
                    value={newStep}
                    onChange={(event) => {
                      const re = /^[0-9\b]+$/;

                      if (
                        (event.target.value === '' ||
                          re.test(event.target.value)) &&
                        event.target.value.length < 4
                      ) {
                        setNewStep(event.target.value);
                      }
                    }}
                  />
                  <PillButton
                    onClick={() => {
                      addStep(Number(newStep));
                    }}
                    move={true}
                  >
                    <TiPlus />
                  </PillButton>
                </PillInputContainer>
              </Flex>
            )}
          </Item>
        ))}
      </List>
    </TimelineContainer>
  );
};

export default Timeline;
