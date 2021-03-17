import { mq } from '@theme/mediaQueries';
import { tokens } from '@theme/tokens';
import styled, { css } from 'styled-components';

import { StyleProps } from './Header.models';

export const HeaderContainer = styled.div`
  margin-top: ${tokens.sizes[24]};
  margin-right: ${tokens.sizes[24]};
  margin-left: ${tokens.sizes[24]};
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled.a`
  font-weight: 900;
  font-size: ${tokens.sizes[22]};
`;

export const List = styled.ul<StyleProps>`
  display: ${({ vertical }) => (vertical ? 'flex' : 'none')};
  margin: ${tokens.sizes[0]};
  padding: ${tokens.sizes[0]};

  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};

  align-items: center;

  li {
    font-size: ${tokens.sizes[18]};
    font-weight: bold;
    margin: ${({ vertical }) => (vertical ? `0 16px 0 0` : `0 0 0 32px`)};
  }

  ${mq(768)} {
    display: flex;
  }

  button {
    margin-left: ${({ vertical }) => (vertical ? '0' : '32px')};
  }
`;

export const ThemeButton = styled.button`
  border: none;
  box-shadow: none;
  padding: ${tokens.sizes[0]};
  margin: ${tokens.sizes[0]};

  font-size: ${tokens.sizes[18]};
  font-weight: bold;

  cursor: pointer;

  font-family: 'Mulish', sans-serif;

  background-color: transparent;

  color: ${(p) => p.theme.black};

  outline: none;

  &:focus {
    box-shadow: 0 0 0 ${tokens.sizes[5]} ${(p) => p.theme.accent};
  }
`;

export const Menu = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  left: 0;
  background-color: ${(p) => p.theme.white};
  padding: ${tokens.sizes[16]};

  transition: all 250ms ease;

  width: 100vw;

  ${mq(768)} {
    display: none;
  }
`;

export const MenuButton = styled.button<{ open: boolean }>`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;

  width: ${tokens.sizes[32]};
  height: ${tokens.sizes[24]};
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  ${mq(768)} {
    display: none;
  }

  outline: none;

  &:focus {
    box-shadow: 0 0 0 ${tokens.sizes[5]} ${(p) => p.theme.highlighter};
  }

  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: ${(p) => p.theme.black};
    border-radius: 4.5px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 9px;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 18px;
      transform-origin: left center;
    }

    ${(p) =>
      p.open &&
      css`
        &:nth-child(1) {
          transform: rotate(45deg);
          top: -1.5px;
          left: 4px;
        }

        &:nth-child(2) {
          width: 0%;
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          top: 20px;
          left: 4px;
        }
      `}
  }
`;
