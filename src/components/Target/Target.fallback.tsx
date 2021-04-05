import Center from '@components/Box/Center';
import Expanded from '@components/Box/Expanded';
import Button from '@components/Button';
import React from 'react';

export const TargetFallback = ({ resetErrorBoundary }) => {
  return (
    <Expanded>
      <Center>
        <Button onClick={resetErrorBoundary}>Reload</Button>
      </Center>
    </Expanded>
  );
};
