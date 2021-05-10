import { AnimationState } from '../state/Animation/animation.models';

export const rotate: AnimationState = {
  width: 600,
  height: 400,
  markup:
    '<div id="square">\n    <div class="wrapper">\n        <div id="circle"></div>\n    </div>\n</div>',
  css:
    '#square {\n    background-color: hotpink;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}\n\n.wrapper {\n    position: relative;\n}\n\n#circle {\n    background-color: royalblue;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n}',
  'animation-play-state': 'running',
  element: 'square',
  elements: {
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
        '0': { transform: {}, property: { top: '0' } },
        '50': {
          property: { top: '150px', 'background-color': 'green' },
          transform: { scale: '2' },
        },
        '100': { property: { top: '0' }, transform: {} },
      },
    },
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
        '50': {
          property: { 'background-color': 'teal', 'border-radius': '50%/25%' },
          transform: { rotate: '180deg' },
        },
      },
    },
  },
};
