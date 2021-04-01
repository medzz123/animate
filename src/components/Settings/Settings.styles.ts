import { buttonReset } from '@theme/resets';
import { tokens } from '@theme/tokens';
import styled, { css } from 'styled-components';

export const SettingsContainer = styled.div<{ active: boolean }>`
  position: fixed;
  left: -${tokens.sizes['2xs']};
  top: 25%;
  display: flex;
  transition: transform ${tokens.transitions.fast} ease;
  ${(p) => p.active && `transform: translateX(${tokens.sizes['2xs']})`}
`;

export const SettingsContent = styled.div`
  width: ${tokens.sizes['2xs']};
  height: ${tokens.sizes['2xs']};
  background-color: ${(p) => p.theme.background};
  align-items: top;
  padding: ${tokens.sizes[16]};
`;

export const SettingsButton = styled.button<{ active: boolean }>`
  ${buttonReset}

  width: ${tokens.sizes[40]};
  height: ${tokens.sizes[40]};
  background-color: ${(p) => p.theme.accent};
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center left;

  outline: none;

  transform: scale(0.7);
  opacity: 0.5;

  ${(p) =>
    p.active &&
    css`
      transform: scale(1);
      opacity: 1;
    `}

  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${tokens.sizes[16]};
`;

export const Color = styled.div<{ color: string; active: boolean }>`
  margin-right: ${tokens.sizes[10]};
  width: ${tokens.sizes[28]};
  height: ${tokens.sizes[28]};
  background-color: ${(p) => p.color};

  ${(p) => p.active && `border: ${tokens.sizes[3]} solid #455a64;`}
`;
