import { NextPage } from 'next';
import React from 'react';

import { useBrowseHooks } from './Browse.hooks';
import { Card, Container, MaxWidth } from './Browse.styles';

const Browse: NextPage = () => {
  const { animations } = useBrowseHooks();

  console.log('Animations', animations);

  return (
    <Container>
      <MaxWidth>
        {animations.map((animation) => (
          <Card key={animation.key}>
            <p>{animation.key}</p>
          </Card>
        ))}
      </MaxWidth>
    </Container>
  );
};

export default Browse;
