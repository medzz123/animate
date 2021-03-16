import styled, { css } from 'styled-components';

export const Logo = styled.span`
  font-weight: 900;
  font-size: 22px;
`;

export const Menu = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  left: 0;
  background-color: ${(p) => p.theme.white};
  padding: 16px;

  transition: all 250ms ease;

  width: calc(100vw - 48px);

  @media screen and (min-width: 596px) {
    display: none;
  }
`;

export const MenuButton = styled.button<{ open: boolean }>`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;

  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

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
  }

  ${(p) =>
    p.open &&
    css`
      span {
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
      }
    `}

  @media screen and (min-width: 596px) {
    display: none;
  }

  outline: none;

  &:focus {
    box-shadow: 0 0 0 5px ${(p) => p.theme.highlighter};
  }
`;

export const HeaderWrapper = styled.nav`
  z-index: 100;
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul<{ vertical?: boolean }>`
  display: flex;
  margin: 0;
  padding: 0;

  flex-direction: ${(p) => (p.vertical ? 'column' : 'row')};

  align-items: center;

  li {
    font-size: 18px;
    font-weight: bold;
    ${(p) =>
      p.vertical
        ? `
    margin-bottom: 16px;
    `
        : ` margin-left: 32px;`}
  }
  ${(p) =>
    !p.vertical &&
    `
  @media screen and (max-width: 596px) {
    display: none;
  }

`}
`;

export const ThemeButton = styled.button<{ vertical?: boolean }>`
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;

  font-size: 18px;
  font-weight: bold;
  margin-left: ${(p) => (p.vertical ? '0' : '32px')};

  cursor: pointer;

  font-family: 'Mulish', sans-serif;

  background-color: transparent;

  color: ${(p) => p.theme.black};

  outline: none;

  &:focus {
    box-shadow: 0 0 0 5px ${(p) => p.theme.accent};
  }
`;
