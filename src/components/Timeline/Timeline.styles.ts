import styled, { css } from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const TimelineContainer = styled.div`
  width: ${tokens.sizes.full};

  height: ${tokens.sizes['4xs']};
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  span {
    color: ${(p) => p.theme.paragraph};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  width: ${tokens.sizes.full};
`;

export const Item = styled.li<{ selected?: boolean }>`
  display: flex;

  transition: all 200ms ease;

  padding: ${tokens.sizes[4]} ${tokens.sizes[8]};

  width: ${tokens.sizes.full};
  border-bottom: ${tokens.sizes[1]} solid ${(p) => p.theme.secondaryBackground}${tokens.alpha[50]};

  ${(p) =>
    p.selected &&
    css`
      background-color: ${(p) => p.theme.secondaryBackground}${tokens.alpha[5]};
    `}

  &:hover {
    background-color: ${(p) => p.theme.secondaryBackground}${tokens.alpha[5]};
  }
`;

export const Overflow = styled.span`
  display: block;
  min-width: ${tokens.sizes[60]};
  max-width: ${tokens.sizes[60]};
  margin-right: ${tokens.sizes[8]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: auto;
  margin-bottom: auto;

  position: relative;
  margin-right: ${tokens.sizes[8]};
  cursor: default;
  color: ${(p) => p.theme.secondaryParagraph};
  padding: 0 ${tokens.sizes[2]};

  font-family: 'Inter', sans-serif;
  font-size: ${tokens.sizes[12]};
`;

export const TooltipText = styled.span`
  font-size: ${tokens.sizes[12]};
`;

export const FramesContainer = styled.div`
  margin: 0 ${tokens.sizes[16]} 0 ${tokens.sizes[24]};
  height: ${tokens.sizes[24]};
  width: ${tokens.sizes.full};
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    top: ${tokens.sizes.half};
    content: '';
    width: ${tokens.sizes.full};
    height: ${tokens.sizes[1]};
    background-color: ${(p) => p.theme.button}${tokens.alpha[65]};
  }
`;

export const Frame = styled.button<{ position: string; selected: boolean }>`
  ${buttonReset}
  position: absolute;
  transition: all 200ms ease;
  left: ${(p) => p.position}%;
  top: ${tokens.sizes.half};
  cursor: pointer;

  background-color: ${(p) => p.theme.button};
  opacity: 0.7;
  width: ${tokens.sizes[9]};
  height: ${tokens.sizes[9]};
  border-radius: 50%;

  transform: translateY(-50%);

  ${(p) =>
    p.selected &&
    css`
      box-shadow: none;
      transform: translateY(-50%) scale(2);
      opacity: 1;
    `}

  box-shadow: inset 0 0 0  ${tokens.sizes[2]} ${(p) => p.theme.buttonText};

  &:focus,
  &:hover {
    transform: translateY(-50%) scale(2);
    box-shadow: inset 0 0 0 ${tokens.sizes[2]} ${(p) => p.theme.buttonText};
    opacity: 1;
  }
`;
