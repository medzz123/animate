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
  const { title, id, children } = props;

  return (
    <StyledAccordion type="multiple">
      <StyledItem key={id} value={id}>
        <StyledHeader>
          <StyledButton>
            {title}
            <AccordionChevron aria-hidden />
          </StyledButton>
        </StyledHeader>
        <StyledPanel>{children}</StyledPanel>
      </StyledItem>
    </StyledAccordion>
  );
};

export default Accordion;
