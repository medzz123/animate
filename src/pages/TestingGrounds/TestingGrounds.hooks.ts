import inRange from 'lodash/inRange';
import { useCallback, useMemo, useState } from 'react';

type AnimatableState = {
  step: number;
  animationState: {
    'animation-duration': string;
    'animation-timing-function': string;
    'animation-delay': string;
    'animation-fill-mode': string;
    'animation-direction': string;
    'animation-iteration-count': string;
    'animation-play-state': string;
  };
  steps: {
    [x: number]: {
      translate?: string;
      rotate?: string;
      skew?: string;
      scale?: string;
    };
  };
};

const parseToCss = (state: AnimatableState['steps']) => {
  let finalString = ``;

  for (const key in state) {
    const properties = state[key];
    let parsedProperties = '';

    for (const property in properties) {
      if (properties[property]) {
        parsedProperties += `${property}(${properties[property]})`;
      }
    }

    const build = `${key}% {
        transform: ${parsedProperties};
    }`;

    if (parsedProperties.length) {
      finalString += build;
    }
  }

  return `
    @keyframes animate {
        ${finalString}
    }
  `;
};

const parseAnimationState = (state: AnimatableState['animationState']) => {
  let finalString = '';

  for (const option in state) {
    finalString += `${option}: ${state[option]};\n`;
  }

  return finalString;
};

const parseCurrentStepCss = (state: AnimatableState) => {
  if (
    state.step !== undefined &&
    state.animationState['animation-play-state'] === 'paused'
  ) {
    let finalString = '';

    const current = state.steps[state.step];

    for (const key in current) {
      console.log(
        '🚀 ~ file: TestingGrounds.hooks.ts ~ line 71 ~ parseCurrentStepCss ~ key',
        key
      );
      if (!current[key]) {
        break;
      }
      finalString += `${key}(${current[key]})`;
    }

    return `
    animation: none;
    transform: ${finalString};`;
  }

  return '';
};

export const useTestingGrounds = () => {
  const [state, setState] = useState<AnimatableState>({
    step: 0,
    animationState: {
      'animation-duration': '2s',
      'animation-timing-function': 'ease',
      'animation-delay': '0s',
      'animation-fill-mode': 'none',
      'animation-direction': 'normal',
      'animation-iteration-count': 'infinite',
      'animation-play-state': 'running',
    },
    steps: {
      0: {
        translate: '0, 0',
      },
      50: {
        translate: '250px, 250px',
        rotate: '90deg',
        scale: '1.8',
        skew: '',
      },
      100: {
        translate: '0, 0',
      },
    },
  });

  const parsed = useMemo(() => {
    return (
      parseCurrentStepCss(state) +
      '\n' +
      parseAnimationState(state.animationState) +
      '\n' +
      parseToCss(state.steps)
    );
  }, [state]);

  const handlers = useCallback(
    () => ({
      createStep: (step: number) => {
        setState((p) => {
          if (
            inRange(step, 0, 100) &&
            !Object.keys(p.steps).includes(String(step))
          ) {
            return {
              ...p,
              step,
              steps: { ...p.steps, [step]: {} },
            };
          }

          return p;
        });
      },
      changeCurrentStep: (step: number) => {
        setState((p) => ({ ...p, step }));
      },
      deleteStep: () => {
        setState((props) => {
          const {
            steps: { [props.step]: _, ...rest },
          } = props;
          if (Object.keys(rest).length > 0) {
            const newCurrentStep = Number(Object.keys(rest)[0]);

            return {
              ...props,
              step: newCurrentStep,
              steps: {
                ...rest,
              },
            };
          } else {
            return props;
          }
        });
      },
      pauseAnimation: () => {
        setState((props) => ({
          ...props,
          animationState: {
            ...props.animationState,
            'animation-play-state': 'paused',
          },
        }));
      },
      toggleAnimationPlayState: () => {
        setState((props) => ({
          ...props,
          step: undefined,
          animationState: {
            ...props.animationState,
            'animation-play-state':
              props.animationState['animation-play-state'] === 'paused'
                ? 'running'
                : 'paused',
          },
        }));
      },
      onAnimationStateChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((p) => {
          return {
            ...p,
            animationState: {
              ...p.animationState,
              [event.target.name]: event.target.value,
            },
          };
        });
      },
      onPropertyChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((p) => {
          return {
            ...p,
            steps: {
              ...p.steps,
              [p.step]: {
                ...p.steps[p.step],
                [event.target.name]: event.target.value,
              },
            },
          };
        });
      },
    }),
    []
  );

  return {
    parsed,
    state,
    currentProperties: state.steps[state.step] || {},
    handlers,
  };
};
