import inRange from 'lodash/inRange';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  parseAnimationState,
  parseCurrentStepCss,
  parseToCss,
} from './TestingGround.utils';
import { AnimatableState } from './TestingGrounds.models';

export const useTestingGrounds = () => {
  const [state, setState] = useState<AnimatableState>({
    loaded: false,
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

  useEffect(() => {
    const animation = window.localStorage.getItem('animation');

    if (!animation) {
      window.localStorage.setItem('animation', JSON.stringify(state));
      setState((s) => ({ ...s, loaded: true }));
    } else {
      setState({ ...JSON.parse(animation), loaded: true });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('animation', JSON.stringify(state));
  }, [state]);

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
