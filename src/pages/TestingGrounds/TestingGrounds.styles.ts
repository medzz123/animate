import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

type TNode = {
  initial: string;
  animations: string;
};

export const ParentNode = styled.div<TNode>`
  width: 100%;
  height: 100%;

  ${(p) => p.initial}

  #node {
    ${(p) => p.animations}
  }
`;
