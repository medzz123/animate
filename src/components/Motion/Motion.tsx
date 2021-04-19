import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';

import { MinLayoutContainer } from './Motion.styles';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const Motion: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <motion.div
      style={{ position: 'absolute' }}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <MinLayoutContainer>{children}</MinLayoutContainer>
    </motion.div>
  );
};

export default Motion;
