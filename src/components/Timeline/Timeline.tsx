import React, { FunctionComponent } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

import { useAnimationState } from '../../state/Animation/animation';
import Box from '../Box';
import Flex from '../Box/Flex';
import ContextMenu from '../ContextMenu';
import {
  ActionsContainer,
  AddObject,
  Frame,
  FramesContainer,
  Item,
  List,
  Overflow,
  TimelineContainer,
  TimelineText,
} from './Timeline.styles';

const Timeline: FunctionComponent = () => {
  const {
    state,
    setElement,
    setStep,
    currentStep,
    deleteElement,
  } = useAnimationState();

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
          Add Object <BsPlusCircleFill />
        </AddObject>
      </ActionsContainer>
      <List>
        {Object.keys(state.elements).map((key) => (
          <ContextMenu
            key={key}
            items={[
              key !== state.element && {
                label: 'Delete Element',
                onClick: () => deleteElement(key),
              },
            ]}
          >
            <Item
              selected={key === state.element}
              onClick={() => {
                setElement(key);
              }}
            >
              <Flex alignItems="center" marginBottom={16}>
                <Overflow>{key}</Overflow>
                {key === state.element && (
                  <div
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
                  </div>
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
                </Flex>
              )}
            </Item>
          </ContextMenu>
        ))}
      </List>
    </TimelineContainer>
  );
};

export default Timeline;
