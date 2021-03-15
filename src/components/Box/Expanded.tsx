import { forwardRef } from 'react';

import Box from './Box';
import { BoxPropsExtended } from './Box.models';

const Expanded = forwardRef<HTMLDivElement, BoxPropsExtended>((props, ref) => (
  <Box width="full" height="full" ref={ref} {...props}>
    {props?.children}
  </Box>
));

Expanded.displayName = 'Box-Expanded';

export default Expanded;
