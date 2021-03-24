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
    [x: number]: {
      translate?: string;
      rotate?: string;
      skew?: string;
      scale?: string;
    };
  };
};
