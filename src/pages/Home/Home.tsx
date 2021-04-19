import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Motion from '../../components/Motion';
import { MaxWidth } from './Home.styles';

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <Motion>
      <MaxWidth>
        <h1>Quickly Build CSS Animations With Animate</h1>
        <p>
          Animate is a platform that helps developers and designers to build
          beautiful css animations in minutes. Try it out now!
        </p>
        <Button
          size="large"
          onClick={() => {
            history.push('/animate');
          }}
        >
          start animating
        </Button>
      </MaxWidth>
    </Motion>
  );
};

export default Home;
