import React from 'react';

import Center from '../Box/Center';
import Expanded from '../Box/Expanded';
import Button from '../Button';

export const TargetFallback = ({ resetErrorBoundary }) => {
  return (
    <Expanded>
      <Center>
        <Button onClick={resetErrorBoundary}>Reload</Button>
      </Center>
    </Expanded>
  );
};
