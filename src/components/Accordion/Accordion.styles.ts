import { Button, Panel } from '@radix-ui/react-accordion';
import { buttonReset } from '@theme/resets';
import { FaAngleDoubleDown } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  ${buttonReset}

  color: ${(p) => p.theme.black};

  display: flex;
  align-items: center;
  width: 100%;

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
  margin-right: 8px;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: ${(p) => p.theme.black};
  width: 100%;
  margin-left: 8px;
`;

export const StyledPanel = styled(Panel)`
  padding: 10;

  &[data-state='open'] {
    animation: slideDown 300ms ease-out;
  }

  &[data-state='closed'] {
    animation: slideUp 300ms ease-out;
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
  transition: transform 300ms;
  margin-right: 8px;

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;
