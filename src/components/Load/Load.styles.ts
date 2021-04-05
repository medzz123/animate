import { buttonReset } from '@theme/resets';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const LoadContainer = styled.div``;

export const List = styled.ul`
  flex-direction: column;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: ${tokens.sizes.full};
  align-items: center;
  margin-bottom: ${tokens.sizes[8]};
`;

export const DeleteAnimationButton = styled.button.attrs({ type: 'button' })`
  ${buttonReset}
`;
