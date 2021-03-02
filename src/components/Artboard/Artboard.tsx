import Frame from '@components/Frame';
import Image from 'next/image';
import React from 'react';

import { ArtboardWrapper } from './Artboard.styles';

const Artboard: React.FunctionComponent = () => {
  return (
    <ArtboardWrapper>
      <Frame title="Artboard">
        <Image src="/duck.jpg" alt="My duck" width="400" height="400" />
      </Frame>
    </ArtboardWrapper>
  );
};

export default Artboard;
