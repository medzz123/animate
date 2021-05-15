import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${tokens.sizes[20]};

  ${mq(768)} {
    margin-bottom: ${tokens.sizes[60]};
  }
`;

export const Card = styled.div`
  margin-bottom: ${tokens.sizes[40]};

  text-transform: capitalize;

  box-shadow: ${(p) => p.theme.shadow};
  border-radius: ${tokens.sizes[20]};
`;

export const ActionsContainer = styled.div`
  padding-top: ${tokens.sizes[20]};
  padding-bottom: ${tokens.sizes[16]};
  padding-left: ${tokens.sizes[30]};
  padding-right: ${tokens.sizes[30]};

  ${mq(768)} {
    padding-top: ${tokens.sizes[40]};
    padding-bottom: ${tokens.sizes[32]};
    padding-left: ${tokens.sizes[60]};
    padding-right: ${tokens.sizes[60]};
  }

  border-bottom: ${tokens.sizes[5]} solid ${(p) => p.theme.border};
  display: flex;
  justify-content: space-between;

  h3 {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: ${(p) => p.theme.main};
  font-size: ${tokens.sizes[20]};

  span {
    margin-right: ${tokens.sizes[8]};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ArtboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
