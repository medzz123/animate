import Header from '@components/Header';
import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Dead simple CSS animation tool</h1>
      <button>Animate!</button>
      <Image src="/duck.jpg" alt="My duck" width="600" height="600" />
    </div>
  );
};

export default Home;
