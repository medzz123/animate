import styled from 'styled-components';

import { tokens } from '../../theme/tokens';

export const OrderedList = styled.ul`
  padding-left: ${tokens.sizes[20]};
  display: flex;
  flex-direction: column;
  padding-left: 0;
  align-items: flex-start;
`;
