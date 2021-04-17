import { Arrow, Content } from '@radix-ui/react-tooltip';
import styled, { css } from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const TimelineContainer = styled.div`
  padding: ${tokens.sizes[8]};
  width: ${tokens.sizes.full};

  height: ${tokens.sizes['4xs']};
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  span {
    color: ${(p) => p.theme.black};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledContent = styled(Content)`
  padding: ${tokens.sizes[4]};
  background-color: ${(p) => p.theme.background};
`;

export const TooltipText = styled.span`
  font-size: ${tokens.sizes[12]};
`;

export const StyledArrow = styled(Arrow)`
  fill: ${(p) => p.theme.background};
`;

export const FramesContainer = styled.div`
  margin: 0 24px;
  height: ${tokens.sizes[24]};
  width: ${tokens.sizes.full};
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.accent}${tokens.alpha[15]};
  }
`;

export const Frame = styled.button<{ position: string; selected: boolean }>`
  ${buttonReset}
  position: absolute;
  transition: all 200ms ease;
  left: ${(p) => p.position}%;
  top: ${tokens.sizes.half};
  cursor: pointer;

  background-color: ${(p) => p.theme.accent};
  opacity: 0.7;
  width: ${tokens.sizes[9]};
  height: ${tokens.sizes[9]};
  border-radius: 50%;

  transform: translateY(-50%);

  ${(p) =>
    p.selected &&
    css`
      box-shadow: inset 0 0 0 2px ${(p) => p.theme.black};
    `}

  &:focus {
    box-shadow: inset 0 0 0 2px ${(p) => p.theme.black};
  }

  &:hover {
    transform: translateY(-50%) scale(2);
    opacity: 1;
  }
`;

export const List = styled.ul`
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  width: ${tokens.sizes.full};
`;

export const Item = styled.li<{ selected?: boolean }>`
  margin-bottom: ${tokens.sizes[8]};
  display: flex;
  border-bottom: ${tokens.sizes[1]} solid ${(p) => p.theme.black}${tokens.alpha[8]};

  width: ${tokens.sizes.full};
  border-radius: ${tokens.sizes[5]};
  padding: ${tokens.sizes[4]};

  ${(p) =>
    p.selected && `background-color: ${p.theme.background}${tokens.alpha[90]};`}

  &:hover {
    background-color: ${(p) => p.theme.background}${tokens.alpha[90]};
  }
`;

export const ElementButton = styled.div`
  justify-content: space-between;
  padding: ${tokens.sizes[4]};
  min-width: ${tokens.sizes[100]};
  max-width: ${tokens.sizes[100]};
  margin-right: ${tokens.sizes[8]};
`;

export const Overflow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${tokens.sizes[8]};

  &:hover {
    overflow: visible;

    position: relative;
    z-index: 999999;
    background-color: ${(p) => p.theme.white};
  }

  span {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
  }
`;

export const ElementType = styled.span`
  opacity: 0.8;
`;
