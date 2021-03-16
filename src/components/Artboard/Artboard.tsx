import Frame from '@components/Frame';
import Image from 'next/image';
import React from 'react';

import { ArtboardContainer } from './Artboard.styles';

const Artboard: React.FunctionComponent = () => {
  return (
    <ArtboardContainer>
      <Frame title="Artboard">
        <Image src="/duck.jpg" alt="My duck" width="400" height="400" />
      </Frame>
    </ArtboardContainer>
  );
};

export default Artboard;
