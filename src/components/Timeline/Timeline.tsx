import React, { FunctionComponent } from 'react';

import { useAnimationState } from '../../state/Animation/animation';
import ContextMenu from '../ContextMenu';
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
    deleteElement,
  } = useAnimationState();

  return (
    <TimelineContainer data-testid="timeline">
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
              <Overflow>{key}</Overflow>

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
            </Item>
          </ContextMenu>
        ))}
      </List>
    </TimelineContainer>
  );
};

export default Timeline;
