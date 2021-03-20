import { useCallback, useMemo, useState } from 'react';

type AnimatableState = {
  [x: number]: {
    translate?: string;
    rotate?: string;
    skew?: string;
    scale?: string;
  };
};

const parseToCss = (obj: AnimatableState) => {
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
    0: {
      translate: '0, 0',
    },
    50: {
      translate: '150px, 0',
    },
    100: {
      translate: '0, 0',
    },
  });

  const parsed = useMemo(() => {
    return parseToCss(animatableProperties);
  }, [animatableProperties]);

  const handlers = useCallback(
    () => ({
      createStep: (step: number) => {
        setAnimatableProperties((p) => ({
          ...p,
          [step]: {},
        }));
      },
      deleteStep: (step: number) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setAnimatableProperties(({ [step]: _, ...p }) => ({
          ...p,
        }));
      },
      onTranslateChange: (input: string, step: number) => {
        setAnimatableProperties((p) => ({
          ...p,
          [step]: { ...p[step], translate: input },
        }));
      },
      onRotateChange: (input: string, step: number) => {
        setAnimatableProperties((p) => ({
          ...p,
          [step]: { ...p[step], rotate: input },
        }));
      },
      onSkewChange: (input: string, step: number) => {
        setAnimatableProperties((p) => ({
          ...p,
          [step]: { ...p[step], skew: input },
        }));
      },
      onScaleChange: (input: string, step: number) => {
        setAnimatableProperties((p) => ({
          ...p,
          [step]: { ...p[step], scale: input },
        }));
      },
    }),
    []
  );

  return { parsed, animatableProperties, handlers };
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
