import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { FrameProps } from './Frame.models';
import { IFrame } from './Frame.styles';

const Frame: React.FunctionComponent<FrameProps> = ({
  children,
  title,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <IFrame title={title} {...props} ref={setContentRef} frameBorder="0">
      {mountNode && createPortal(children, mountNode)}
    </IFrame>
  );
};

export default Frame;
