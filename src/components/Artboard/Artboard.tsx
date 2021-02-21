import Image from 'next/image';
import React from 'react';

import { ArtboardWrapper } from './Artboard.styles';

const Artboard: React.FunctionComponent = () => {
  return (
    <ArtboardWrapper>
      <Image src="/duck.jpg" alt="My duck" width="400" height="400" />
    </ArtboardWrapper>
  );
};

export default Artboard;
