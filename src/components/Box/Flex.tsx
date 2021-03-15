import { forwardRef } from 'react';

import Box from './Box';
import { BoxPropsExtended } from './Box.models';

const Flex = forwardRef<HTMLDivElement, BoxPropsExtended>((props, ref) => (
  <Box display="flex" ref={ref} {...props}>
    {props?.children}
  </Box>
));

Flex.displayName = 'Box-Flex';

export default Flex;
