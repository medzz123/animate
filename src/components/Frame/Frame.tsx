import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createGlobalStyle, css, StyleSheetManager } from 'styled-components';

import { FrameProps } from './Frame.models';
import { IFrame } from './Frame.styles';

const styles = css`
  body,
  html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${styles}
`;

const Frame: React.FunctionComponent<FrameProps> = (props) => {
  const { children, title, onLoad, ...rest } = props;
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      onLoad();
    }
  }, [mounted]);

  return (
    <IFrame title={title} frameBorder="0" ref={setContentRef} {...rest}>
      <StyleSheetManager target={contentRef?.contentWindow?.document?.head}>
        <div>
          <GlobalStyles />
          {mountNode && createPortal(children, mountNode)}
        </div>
      </StyleSheetManager>
    </IFrame>
  );
};

export default Frame;
