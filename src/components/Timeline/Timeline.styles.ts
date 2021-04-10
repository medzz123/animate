import { Arrow, Content, Trigger } from '@radix-ui/react-tooltip';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

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
  height: ${tokens.sizes[24]};
  width: ${tokens.sizes.full};
  position: relative;
`;

export const Frame = styled(Trigger)<{ position: number }>`
  position: absolute;
  left: ${(p) => p.position}%;
  top: ${tokens.sizes.half};

  background-color: ${(p) => p.theme.accent};
  width: ${tokens.sizes[12]};
  height: ${tokens.sizes[12]};

  transform: translateY(-50%) translateX(50%) rotate(45deg);
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

export const ElementButton = styled.button<{ hidden?: boolean }>`
  /* box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.black}; */
  justify-content: space-between;
  padding: ${tokens.sizes[4]};
  min-width: ${tokens.sizes[100]};
  max-width: ${tokens.sizes[100]};
  margin-right: ${tokens.sizes[8]};

  ${(p) => p.hidden && `visibility: hidden;`}
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
`;

export const ElementType = styled.span`
  opacity: 0.8;
`;
