import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

type TNode = {
  initial: string;
  animations: string;
};

export const TestNode = styled.div<TNode>`
  ${(p) => p.initial}

  .test-node {
    animation-name: animate;

    ${(p) => p.animations}
  }
`;
