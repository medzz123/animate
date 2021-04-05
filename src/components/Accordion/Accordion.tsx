import { Header, Item, Root } from '@radix-ui/react-accordion';
import React, { FunctionComponent } from 'react';

import { AccordionProps } from './Accordion.models';
import {
  AccordionChevron,
  HorizontalLine,
  StyledButton,
  StyledPanel,
  Text,
} from './Accordion.styles';

const Accordion: FunctionComponent<AccordionProps> = (props) => {
  const { title, id, children, Icon } = props;

  return (
    <Root type="multiple">
      <Item key={id} value={id}>
        <Header>
          <StyledButton>
            <AccordionChevron aria-hidden />
            <Text>{title}</Text>
            <Icon />
            <HorizontalLine />
          </StyledButton>
        </Header>
        <StyledPanel>{children}</StyledPanel>
      </Item>
    </Root>
  );
};

export default Accordion;
