import styled, { css } from 'styled-components';

import { buttonReset } from '../../theme/resets';
import { tokens } from '../../theme/tokens';

export const PlayStateButtons = styled.button.attrs({ type: 'button' })`
  color: ${(p) => p.theme.somethingNew.main};

  svg {
    width: ${tokens.sizes[24]};
    height: ${tokens.sizes[24]};
  }
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
  padding: ${tokens.sizes[8]};
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
      transform: translateX(-${tokens.sizes.full});
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

  height: ${tokens.sizes.full};
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  box-shadow: ${(p) => p.theme.somethingNew.shadow};
  border-radius: ${tokens.sizes[20]};

  span {
    color: ${(p) => p.theme.paragraph};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ActionsContainer = styled.div`
  padding: ${tokens.sizes[24]} ${tokens.sizes[40]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: ${tokens.sizes[16]};
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

  transition: all ${tokens.transitions.fast} ease;

  padding: ${tokens.sizes[16]} ${tokens.sizes[40]};

  width: ${tokens.sizes.full};

  border-radius: ${tokens.sizes[20]};

  ${(p) =>
    p.selected &&
    css`
      background-color: ${(p) => p.theme.somethingNew.focus};
    `}
`;

export const Overflow = styled.span`
  font-size: ${tokens.sizes[14]};
  font-weight: bold;
  min-width: ${tokens.sizes[52]};
`;

export const TimelineText = styled.span`
  margin-right: ${tokens.sizes[30]};
  font-size: ${tokens.sizes[12]};
  color: ${(p) => p.theme.somethingNew.paragraph};
  min-width: ${tokens.sizes[70]};
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
  transition: all ${tokens.transitions.fast} ease;
  left: ${(p) => p.position}%;
  top: ${tokens.sizes.half};
  cursor: pointer;

  background-color: ${(p) => p.theme.button};
  width: ${tokens.sizes[7]};
  height: ${tokens.sizes[7]};
  border-radius: ${tokens.sizes.half};

  transform: translateY(-${tokens.sizes.half});

  ${(p) =>
    p.selected &&
    css`
      box-shadow: none;
      transform: translateY(-${tokens.sizes.half}) scale(2);
    `}

  &:focus,
  &:hover {
    transform: translateY(-${tokens.sizes.half}) scale(2);
  }
`;
