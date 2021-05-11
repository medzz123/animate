import React from 'react';
import { Delete, Plus } from 'react-iconly';

import Box from '../../components/Box';
import Flex from '../../components/Box/Flex';
import Display from '../../components/Display';
import { useBrowseHooks } from './Browse.hooks';
import {
  ActionsContainer,
  ArtboardContainer,
  Button,
  Card,
  Container,
  Title,
} from './Browse.styles';

const Browse: React.FunctionComponent = () => {
  const { animations } = useBrowseHooks();

  return (
    <Container>
      <Title>Your animations</Title>
      {animations.map((animation) => (
        <Card key={animation.key}>
          <ActionsContainer>
            <h3>{animation.key.replace('animation-', '')}</h3>
            <Flex>
              <Button
                onClick={() => {
                  window.localStorage.setItem('current', animation.key);
                  window.location.href = '/animate';
                }}
              >
                <span>Load</span>
                <Plus set="light" primaryColor="#313c60" />
              </Button>
              <Box width={40} />
              <Button
                onClick={() => {
                  window.localStorage.removeItem(animation.key);
                  window.location.href = '/animate';
                }}
              >
                <span>Delete</span>
                <Delete set="light" primaryColor="red" />
              </Button>
            </Flex>
          </ActionsContainer>
          <ArtboardContainer>
            <Display animationKey={animation.key} />
          </ArtboardContainer>
        </Card>
      ))}

      {animations.length === 0 && <p>You don&apos;t have any animations</p>}
    </Container>
  );
};

export default Browse;
