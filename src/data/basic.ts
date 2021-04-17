import { AnimationState } from '../state/Animation/animation.models';

export const basic: AnimationState = {
  markup: `<div id="node"/>
  <div id="bode"/>
  `,
  css: `#node {
    background-color: red;
    width: 40px;
    height: 40px;
  }

  #bode {
    background-color: blue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  `,
  'animation-play-state': 'running',
  element: 'node',
  elements: {
    node: {
      animationState: {
        'animation-duration': '2s',
        'animation-timing-function': 'ease',
        'animation-delay': '0s',
        'animation-fill-mode': 'none',
        'animation-direction': 'normal',
        'animation-iteration-count': 'infinite',
      },
      step: 50,
      steps: {
        0: {
          transform: {
            translate: '0px, 0px',
            rotate: '0deg',
            scale: '1',
            skew: '0deg',
          },
          normal: {},
        },
        50: {
          transform: {
            translate: '250px, 250px',
            rotate: '90deg',
            scale: '1.8',
            skew: '0deg',
          },
          normal: {},
        },
        100: {
          transform: {
            translate: '0px, 0px',
            rotate: '0deg',
            scale: '1',
            skew: '0deg',
          },
          normal: {},
        },
      },
    },
    bode: {
      animationState: {
        'animation-duration': '2s',
        'animation-timing-function': 'ease',
        'animation-delay': '0s',
        'animation-fill-mode': 'none',
        'animation-direction': 'normal',
        'animation-iteration-count': 'infinite',
      },
      step: 50,
      steps: {
        0: {
          transform: {
            translate: '0px, 0px',
            scale: '1',
            skew: '0deg',
          },
          normal: {},
        },
        50: {
          transform: {
            translate: '50px, 50px',
            scale: '1.8',
            skew: '0deg',
          },
          normal: {},
        },
        100: {
          transform: {
            translate: '0px, 0px',
            scale: '1',
            skew: '0deg',
          },
          normal: {},
        },
      },
    },
  },
};
