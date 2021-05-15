import React from 'react';
import { useHistory } from 'react-router-dom';

import { HomeButton, MaxWidth } from './Home.styles';

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <MaxWidth>
      <h1>Quickly Build CSS Animations With Animate</h1>
      <p>
        Animate is a platform that helps developers and designers to build
        beautiful css animations in minutes. Try it out now!
      </p>
      <HomeButton
        onClick={() => {
          history.push('/animate');
        }}
      >
        start animating
      </HomeButton>
    </MaxWidth>
  );
};

export default Home;
