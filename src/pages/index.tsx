import { username } from '@state/user';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

const Home: NextPage = () => {
  const [text, _] = useRecoilState<string>(username);
  return (
    <div>
      <h1>Dead simple CSS animation tool</h1>
      <button>Animate!</button>
      <p>{text}</p>
      <Image src="/duck.jpg" alt="My duck" width="600" height="600" />
    </div>
  );
};

export default Home;
