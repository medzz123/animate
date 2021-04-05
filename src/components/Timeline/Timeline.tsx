import Box from '@components/Box';
import React, { FunctionComponent } from 'react';

import {
  ElementButton,
  ElementName,
  ElementType,
  Overflow,
  TimelineContainer,
} from './Timeline.styles';

const Timeline: FunctionComponent = () => {
  return (
    <TimelineContainer data-testid="timeline">
      <ElementButton>
        <Overflow>
          <ElementName>SomeLongClassName</ElementName>
        </Overflow>
        <ElementType>div</ElementType>
      </ElementButton>
      <Box height={8} />
      <ElementButton>
        <Overflow>
          <ElementName>Cube</ElementName>
        </Overflow>
        <ElementType>div</ElementType>
      </ElementButton>
    </TimelineContainer>
  );
};

export default Timeline;
