import styled from 'styled-components';

export const Container = styled.div``;

export const TestNode = styled.div.attrs({ className: 'text-node' })<{
  raw: string;
}>`
  ${(p) => p.raw}
`;
