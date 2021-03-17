import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { FrameProps } from './Frame.models';
import { IFrame } from './Frame.styles';

const Frame: React.FunctionComponent<FrameProps> = (props) => {
  const { children, title, width = '600px', height = '400px', ...rest } = props;
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <IFrame
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      ref={setContentRef}
      {...rest}
    >
      {mountNode && createPortal(children, mountNode)}
    </IFrame>
  );
};

export default Frame;
