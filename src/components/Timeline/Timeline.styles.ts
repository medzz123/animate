import styled, { css } from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const DeleteButton = styled.button`
  padding: 0 ${tokens.sizes[14]};
  background-color: ${(p) => p.theme.button};
`;

export const PillInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PillInput = styled.input`
  width: ${tokens.sizes[70]};
  height: ${tokens.sizes[28]};
  border-radius: ${tokens.sizes[16]};
  background-color: white;
  box-shadow: none;
  border: none;
  outline: none;

  color: #313c60;
  font-weight: bold;
  padding: 8px;
`;

export const PillButton = styled.button<{ move?: boolean }>`
  border-radius: ${tokens.sizes.half};
  height: ${tokens.sizes[28]};
  width: ${tokens.sizes[28]};
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.move &&
    css`
      transform: translateX(-100%);
    `}

  background-color: #313c60;

  color: white;

  svg {
    width: ${tokens.sizes[16]};
    height: ${tokens.sizes[16]};
  }
`;

export const TimelineContainer = styled.div`
  width: ${tokens.sizes.full};

  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  span {
    color: ${(p) => p.theme.paragraph};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ActionsContainer = styled.div`
  padding: 26px 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 16px;
  }
`;

export const AddObject = styled.button`
  font-size: 16px;

  color: hsla(226, 32%, 28%, 1);

  span {
    margin-right: 8px;
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
  flex-direction: column;
  justify-content: flex-start;

  transition: all 200ms ease;

  padding: ${tokens.sizes[16]} ${tokens.sizes[40]};

  width: ${tokens.sizes.full};

  border-radius: 20px;

  ${(p) =>
    p.selected &&
    css`
      background-color: #f7f8fc;
    `}
`;

export const Overflow = styled.span`
  font-size: ${tokens.sizes[14]};
  font-weight: bold;
`;

export const TooltipText = styled.span`
  font-size: ${tokens.sizes[12]};
`;

export const TimelineText = styled.span`
  margin-right: 30px;
  font-size: 12px;
  color: #313c60;
  min-width: 80px;
`;

export const FramesContainer = styled.div`
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
  width: ${tokens.sizes[7]};
  height: ${tokens.sizes[7]};
  border-radius: 50%;

  transform: translateY(-50%);

  ${(p) =>
    p.selected &&
    css`
      box-shadow: none;
      transform: translateY(-50%) scale(2);
    `}

  &:focus,
  &:hover {
    transform: translateY(-50%) scale(2);
  }
`;
