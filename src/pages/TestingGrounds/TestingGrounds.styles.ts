import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const TestNode = styled.div.attrs({ className: 'text-node' })<{
  initial: string;
  animations: string;
}>`
  .test-node {
    ${(p) => p.initial}

    ${(p) => p.animations}
  }
`;
