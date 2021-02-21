import styled from 'styled-components';

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 240px;
  height: 54px;

  font-weight: 900;
  text-align: center;
  color: ${(p) => p.theme.highlighter};
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 0 0 1px inset ${(p) => p.theme.white};
  position: relative;

  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(p) => p.theme.highlighter};
  }

  &:after,
  &:before {
    content: '';
    width: 1px;
    position: absolute;
    height: 8px;
    background: ${(p) => p.theme.black};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    right: 0;
    left: initial;
  }

  p {
    margin: 0;
    height: 54px;
    line-height: 54px;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
    span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid ${(p) => p.theme.highlighter};
      &:before {
        content: '';
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: ${(p) => p.theme.black};
        position: absolute;
        transition: 0.3s ease-out all;
      }
    }

    span.bg {
      left: -5%;
      position: absolute;
      background: ${(p) => p.theme.highlighter};
      width: 0;
      height: 100%;
      z-index: 3;
      transition: 0.3s ease-out all;
      transform: skewX(-10deg);
    }

    span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &:after {
        content: '';
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: ${(p) => p.theme.black};
        position: absolute;
        transition: 0.3s ease-out all;
        z-index: 5;
      }
    }
  }

  &:hover {
    color: ${(p) => p.theme.white};

    span.bg {
      width: 110%;
    }

    span.text:after {
      background: ${(p) => p.theme.white};
    }
  }
`;

// &.white:hover > p {
//     color: ${(p) => p.theme.highlighter};
//   }

//   &.white > p {
//     background: ${(p) => p.theme.white};
//     color: ${(p) => p.theme.black};
//     & span.base {
//       border: 1px solid transparent;
//     }
//   }

// &.transparent:hover > p {
//     color: ${(p) => p.theme.white};
//     & span.text {
//       box-shadow: 0 0 0 1px ${(p) => p.theme.white};
//     }
//   }

//   &.transparent > p {
//     background: ${(p) => p.theme.black};
//     color: ${(p) => p.theme.white};
//     & span.base {
//       border: 1px solid ${(p) => p.theme.white};
//     }
//   }
