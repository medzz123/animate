import styled from 'styled-components';

export const BoxContainer = styled.div<{ parsedCss: string }>`
  ${(p) => p.parsedCss}
`;
