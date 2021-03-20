import inRange from 'lodash/inRange';
import { useCallback, useMemo, useState } from 'react';

type AnimatableState = {
  step: number;
  steps: {
    [x: number]: {
      translate?: string;
      rotate?: string;
      skew?: string;
      scale?: string;
    };
  };
};

const parseToCss = (obj: AnimatableState['steps']) => {
  let finalString = ``;

  for (const key in obj) {
    const properties = obj[key];
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

export const useTestingGrounds = () => {
  const [
    animatableProperties,
    setAnimatableProperties,
  ] = useState<AnimatableState>({
    step: 50,
    steps: {
      '0': {
        translate: '0, 0',
      },
      '50': {
        translate: '250px, 250px',
        rotate: '90deg',
        scale: '1.8',
        skew: '',
      },
      '100': {
        translate: '0, 0',
      },
    },
  });

  const parsed = useMemo(() => {
    return parseToCss(animatableProperties.steps);
  }, [animatableProperties.steps]);

  const handlers = useCallback(
    () => ({
      createStep: (step: number) => {
        setAnimatableProperties((p) => {
          if (
            inRange(step, 0, 100) &&
            !Object.keys(p.steps).includes(String(step))
          ) {
            return {
              step,
              steps: { ...p.steps, [step]: {} },
            };
          }

          return p;
        });
      },
      changeCurrentStep: (step: number) => {
        setAnimatableProperties((p) => ({ ...p, step }));
      },
      deleteStep: () => {
        setAnimatableProperties((props) => {
          const {
            steps: { [props.step]: _, ...rest },
          } = props;
          if (Object.keys(rest).length > 0) {
            const newCurrentStep = Number(Object.keys(rest)[0]);

            return {
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
      onPropertyChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnimatableProperties((p) => {
          return {
            step: p.step,
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
    animatableProperties,
    currentProperties: animatableProperties.steps[animatableProperties.step],
    handlers,
  };
};

export const useAnimationControls = () => {
  const [play, setPlay] = useState(true);

  const handlers = useCallback(
    () => ({
      toggle: () => {
        setPlay((p) => !p);
      },
    }),
    []
  );

  return { play, handlers };
};
