import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TestNode = styled.div.attrs({ className: 'text-node' })<{
  raw: string;
}>`
  width: 40px;
  height: 40px;
  background-color: red;
`;
