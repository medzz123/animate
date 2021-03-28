export type AnimatableState = {
  markup: string;
  loaded: boolean;
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
    [x: number]: StepProperties;
  };
};

type TransformProperties = {
  translate: string;
  rotate: string;
  skew: string;
  scale: string;
};

type CSSProperties = {
  'background-color': string;
  opacity: string;
};

type StepProperties = {
  transform?: Partial<TransformProperties>;
  normal?: Partial<CSSProperties>;
};
