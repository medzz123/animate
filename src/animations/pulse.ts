import { AnimationState } from '../state/Animation/animation.models';

/**
 * Hearth pulse animation
 */
export const pulse: AnimationState = {
  width: 600,
  height: 400,
  markup: `<div id="main-container">
  <div id="heart"></div>
</div>`,
  css: `#main-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#heart {
    position: relative;
    width: 100px;
    height: 90px;
    margin: 0 auto;
}

#heart:before, #heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}
      
#heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}`,
  element: 'heart',
  'animation-play-state': 'running',
  elements: {
    heart: {
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
        50: {
          transform: {
            scale: '2',
          },
          property: {},
        },
      },
    },
  },
};
