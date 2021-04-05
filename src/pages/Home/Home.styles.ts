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
    transform: translateY(-${tokens.sizes[48]});
  }

  h1,
  p {
    text-align: center;
  }

  max-width: ${tokens.sizes['3xl']};
`;

export const HomeContainer = styled.div`
  margin: auto auto;

  min-width: calc(100vw - ${tokens.sizes[48]});
  min-height: calc(100vh - 6.813rem - ${tokens.sizes[24]});

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
