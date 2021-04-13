import { Close as DialogClose } from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { secondaryButtonStyles } from '../../theme/reusable';

export const Close = styled(DialogClose)`
  ${secondaryButtonStyles}
`;
