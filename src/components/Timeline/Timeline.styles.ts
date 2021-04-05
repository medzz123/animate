import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const TimelineContainer = styled.div`
  padding: ${tokens.sizes[8]};
  width: ${tokens.sizes.full};

  height: 200px;
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

export const ElementButton = styled.button`
  box-shadow: inset 0 0 0 ${tokens.sizes[1]} ${(p) => p.theme.black}${tokens.alpha[50]};
  justify-content: space-between;
  padding: ${tokens.sizes[4]};
  width: ${tokens.sizes[100]};
`;

export const Overflow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: ${tokens.sizes[8]};

  &:hover {
    overflow: visible;

    position: relative;
    background-color: ${(p) => p.theme.background};
  }
`;

export const ElementName = styled.span``;

export const ElementType = styled.span`
  opacity: 0.5;
`;
