import React from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Display from '../../components/Display';
import Motion from '../../components/Motion';
import { useBrowseHooks } from './Browse.hooks';
import {
  ActionsContainer,
  ArtboardContainer,
  Card,
  Container,
  MaxWidth,
} from './Browse.styles';
const Browse: React.FunctionComponent = () => {
  const { animations } = useBrowseHooks();

  return (
    <Motion>
      <Container>
        <MaxWidth>
          <h1>Your animations</h1>
          {animations.map((animation) => (
            <Card key={animation.key}>
              <ActionsContainer>
                <p>{animation.key.replace('animation-', '')}</p>
                <Box width={8} />
                <Button
                  onClick={() => {
                    window.localStorage.setItem('current', animation.key);
                    window.location.href = '/animate';
                  }}
                >
                  Load
                </Button>
                <Box width={8} />
                <Button
                  onClick={() => {
                    window.localStorage.removeItem(animation.key);
                    window.location.href = '/animate';
                  }}
                >
                  Delete
                </Button>
              </ActionsContainer>
              <ArtboardContainer>
                <Display animationKey={animation.key} />
              </ArtboardContainer>
            </Card>
          ))}
          {animations.length === 0 && <p>You don&apos;t have any animations</p>}
        </MaxWidth>
      </Container>
    </Motion>
  );
};

export default Browse;
