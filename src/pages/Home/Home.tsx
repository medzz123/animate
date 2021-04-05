import Button from '@components/Button';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer, MaxWidth } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <HomeContainer>
      <MaxWidth>
        <h1>Quickly Build CSS Animations With Animate</h1>
        <p>
          Animate is a platform that helps developers and designers to build
          beautiful css animations in minutes. Try it out now!
        </p>
        <Button
          size="large"
          onClick={() => {
            router.push('/animate');
          }}
        >
          start animating
        </Button>
      </MaxWidth>
    </HomeContainer>
  );
};

export default Home;
