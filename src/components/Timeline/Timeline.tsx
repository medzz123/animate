import React, { FunctionComponent, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { TiPlus } from 'react-icons/ti';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Flex from '../Box/Flex';
import {
  ActionsContainer,
  AddObject,
  Frame,
  FramesContainer,
  Item,
  List,
  Overflow,
  PillButton,
  PillInput,
  PillInputContainer,
  TimelineContainer,
  TimelineText,
} from './Timeline.styles';

const Timeline: FunctionComponent = () => {
  const { state, setElement, setStep, currentStep } = useAnimationState();

  const [newStep, setNewStep] = useState('');

  return (
    <TimelineContainer data-testid="timeline">
      <ActionsContainer>
        <Flex>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 20"
          >
            <path
              d="M1 1l14 9-14 9V1z"
              stroke="#313C60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Box width={40} />
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M17 1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V3a2 2 0 00-2-2z"
              stroke="#313C60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Flex>
        <AddObject>
          <span>Add Object</span>
          <PillButton>
            <TiPlus />
          </PillButton>
        </AddObject>
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
                  <PillButton move={true}>
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
