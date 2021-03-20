import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

type TNode = {
  initial: string;
  animations: string;
  play: boolean;
};

export const TestNode = styled.div<TNode>`
  ${(p) => p.initial}

  .test-node {
    ${(p) => p.play && `animation: animate 1500ms infinite;`}

    ${(p) => p.animations}
  }
`;
