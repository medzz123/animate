import React from 'react';
import { useHistory } from 'react-router-dom';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Display from '../../components/Display';
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
  const history = useHistory();

  return (
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
                  history.push('/animate');
                }}
              >
                Load
              </Button>
              <Box width={8} />
              <Button
                onClick={() => {
                  window.localStorage.removeItem(animation.key);
                  location.reload();
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
      </MaxWidth>
    </Container>
  );
};

export default Browse;
