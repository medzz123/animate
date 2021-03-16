import { forwardRef } from 'react';

import Box from './Box';
import { BoxPropsExtended } from './Box.models';

const Flex = forwardRef<HTMLDivElement, BoxPropsExtended>((props, ref) => (
  <Box
    display="flex"
    width="full"
    height="full"
    justifyContent="center"
    alignItems="center"
    ref={ref}
    {...props}
  >
    {props?.children}
  </Box>
));

Flex.displayName = 'Box-Center';

export default Flex;
