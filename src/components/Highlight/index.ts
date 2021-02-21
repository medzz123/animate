import styled from 'styled-components';

const LinkHighlight = styled.span`
  &:hover {
    background: linear-gradient(
      0deg,
      ${(p) => p.theme.highlighter} 70%,
      transparent 10%,
      transparent 20%
    );
  }

  background: linear-gradient(
    transparent 60%,
    ${(p) => p.theme.highlighter} 40%
  );
`;

const HighlightBox = styled.span`
  background: linear-gradient(
    0deg,
    ${(p) => p.theme.highlighter} 40%,
    transparent 10%,
    transparent 40%
  );
  margin-right: 10px;
`;

export { LinkHighlight, HighlightBox };
