import { Button, Panel } from '@radix-ui/react-accordion';
import { FaAngleDoubleDown } from 'react-icons/fa';
import styled from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const StyledButton = styled(Button)`
  ${buttonReset}

  color: ${(p) => p.theme.paragraph};

  display: flex;
  align-items: center;
  width: ${tokens.sizes.full};

  &:hover {
    span {
      text-decoration: underline;
    }
  }

  &:focus {
    box-shadow: none;

    span {
      text-decoration: underline;
    }
  }
`;

export const Text = styled.span`
  margin-right: ${tokens.sizes[8]};
`;

export const HorizontalLine = styled.div`
  height: ${tokens.sizes[1]};
  background-color: ${(p) => p.theme.headline};
  width: ${tokens.sizes.full};
  margin-left: ${tokens.sizes[8]};
`;

export const StyledPanel = styled(Panel)`
  &[data-state='open'] {
    animation: slideDown ${tokens.transitions.fast} ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp ${tokens.transitions.fast} ease-out;
  }

  @keyframes slideDown {
    0% {
      height: 0;
      opacity: 0;
    }

    99% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      height: var(--radix-accordion-panel-height);
    }
  }

  @keyframes slideUp {
    0% {
      height: var(--radix-accordion-panel-height);
      opacity: 1;
    }

    1% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      height: 0;
    }
  }
`;

export const AccordionChevron = styled(FaAngleDoubleDown)`
  transition: transform ${tokens.transitions.fast};
  margin-right: ${tokens.sizes[8]};

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;
