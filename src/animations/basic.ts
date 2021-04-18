import { AnimationState } from '../state/Animation/animation.models';

export const basic: AnimationState = {
  width: 600,
  height: 400,
  markup: `<div id="square">
  <div id="circle"></div>
</div>`,
  css: `#square {
    background-color: red;
    width: 40px;
    height: 40px;
}

#circle {
    background-color: blue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}`,
  'animation-play-state': 'running',
  element: 'square',
  elements: {
    square: {
      animationState: {
        'animation-duration': '4s',
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
          property: {},
        },
        50: {
          transform: {
            translate: '250px, 250px',
            rotate: '90deg',
            scale: '1.8',
            skew: '0deg',
          },
          property: {},
        },
        100: {
          transform: {
            translate: '0px, 0px',
            rotate: '0deg',
            scale: '1',
            skew: '0deg',
          },
          property: {},
        },
      },
    },
    circle: {
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
          property: {},
        },
        50: {
          transform: {
            translate: '50px, 50px',
            scale: '1.8',
            skew: '0deg',
          },
          property: {},
        },
        100: {
          transform: {
            translate: '0px, 0px',
            scale: '1',
            skew: '0deg',
          },
          property: {},
        },
      },
    },
  },
};
