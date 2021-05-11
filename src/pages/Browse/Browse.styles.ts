import styled from 'styled-components';

import { mq } from '../../theme/mediaQueries';
import { tokens } from '../../theme/tokens';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;

  ${mq(768)} {
    margin-bottom: 60px;
  }
`;

export const Card = styled.div`
  margin-bottom: ${tokens.sizes[40]};

  text-transform: capitalize;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
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

  border-bottom: 5px solid #f0f0f0;
  display: flex;
  justify-content: space-between;

  h3 {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  color: #313c60;
  font-size: 20px;

  span {
    margin-right: 8px;
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
