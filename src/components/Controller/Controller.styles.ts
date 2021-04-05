import styled from 'styled-components';

export const ControllerContainer = styled.div`
  overflow: scroll;
  height: 100%;
  padding: 8px;
  min-width: 300px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
