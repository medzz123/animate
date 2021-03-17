import React, { FunctionComponent } from 'react';

import { AccordionProps } from './Accordion.models';
import {
  AccordionChevron,
  StyledAccordion,
  StyledButton,
  StyledHeader,
  StyledItem,
  StyledPanel,
} from './Accordion.styles';

const Accordion: FunctionComponent<AccordionProps> = (props) => {
  const { data = [] } = props;

  return (
    <StyledAccordion type="multiple">
      {data.map((item) => (
        <StyledItem key={item.id} value={item.id}>
          <StyledHeader>
            <StyledButton>
              {item.title}
              <AccordionChevron aria-hidden />
            </StyledButton>
          </StyledHeader>
          <StyledPanel>{item.content}</StyledPanel>
        </StyledItem>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
