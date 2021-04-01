import { Button, Header, Item, Panel, Root } from '@radix-ui/react-accordion';
import { GiCupidonArrow } from 'react-icons/gi';
import styled from 'styled-components';

export const StyledAccordion = styled(Root)``;

export const StyledItem = styled(Item)``;

export const StyledHeader = styled(Header)`
  margin: 0;
  display: 'flex';
`;

export const StyledButton = styled(Button)``;

export const StyledPanel = styled(Panel)`
  padding: 10;

  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }

    to {
      height: var(--radix-accordion-panel-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-panel-height);
    }

    to {
      height: 0;
    }
  }
`;

export const AccordionChevron = styled(GiCupidonArrow)`
  transition: 'transform 300ms';
  [data-state='open'] & {
    transform: 'rotate(180deg)';
  }
`;
