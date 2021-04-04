import styled from 'styled-components';

export const Content = styled.main<{ x: number; y: number }>`
  width: 90%; /* 90% of viewport width - 90vw */
  height: ${(p) => 0.50625 * p.x}px; /* ratio = 9/16 * 90 = 50.625 - 50.625vw */
  background: pink;
  max-height: 90%; /* 90 vh*/
  max-width: ${(p) => 1.6 * p.y}px; /* 16/9 * 90 = 160 - 160vh*/
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: calc(100vh - 109px - 24px);
  background: teal;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: calc(100% - 37px - 156px);
`;

export const FrameContainer = styled.div.attrs({ id: 'container' })`
  background-color: yellow;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopBar = styled.div`
  width: 100%;
  background-color: tomato;
`;

export const LeftSidePanel = styled.div`
  height: 100%;
  padding: 12px;
  background-color: royalblue;
`;

export const BottomPanel = styled.div`
  width: 100%;
  background-color: red;
`;

// width: 90vw; /* 90% of viewport width */
// height: 60vw; /* ratio = 9/16 * 90 = 50.625 */
// background: pink;
// max-height: 90vh;
// max-width: 135vh; /* 16/9 * 90 = 160 */
// margin: auto;
// position: absolute;
// top: 0;
// bottom: 0;
// left: 0;
// right: 0;
// display: flex;
// justify-content: center;
// align-items: center;
