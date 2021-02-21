import Button from '@components/Button';
import { username } from '@state/user';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

import { Center, Expanded } from './Home.styles';

const Home: NextPage = () => {
  const [text] = useRecoilState<string>(username);
  const router = useRouter();
  return (
    <div>
      <Expanded>
        <Center>
          <h1>Dead simple CSS animation tool</h1>
          <p>{text}</p>
          <Image src="/duck.jpg" alt="My duck" width="400" height="400" />
          <br />
          <Button
            onClick={() => {
              router.push('/animate');
            }}
          >
            Start Animating
          </Button>
        </Center>
      </Expanded>
    </div>
  );
};

export default Home;
