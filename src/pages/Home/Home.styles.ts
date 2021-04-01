import { mq } from '@theme/mediaQueries';
import { tokens } from '@theme/tokens';
import styled from 'styled-components';

export const Center = styled.div``;

export const MaxWidth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mq(768)} {
    transform: translateY(-65px);
  }

  h1,
  p {
    text-align: center;
  }

  max-width: ${tokens.sizes['3xl']};
`;

export const HomeContainer = styled.div`
  margin: auto auto;

  min-width: calc(100vw - 48px);
  min-height: calc(100vh - 112px - 48px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
