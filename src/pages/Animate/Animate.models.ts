import { useAnimationState } from './Animate.hooks';

export type AnimationProvider = ReturnType<typeof useAnimationState>;

export interface AnimationState {
  markup: string;
  css: string;
  element: string;
  animationState: {
    'animation-duration': string;
    'animation-timing-function': string;
    'animation-delay': string;
    'animation-fill-mode': string;
    'animation-direction': string;
    'animation-iteration-count': string;
    'animation-play-state': string;
  };
  elements: Record<string, Element>;
}

interface Element {
  step: number;
  steps: {
    [x: number]: StepProperties;
  };
}

type StepProperties = {
  transform?: Partial<TransformProperties>;
  normal?: Partial<CSSProperties>;
};

type TransformProperties = {
  translate: string;
  rotate: string;
  skew: string;
  scale: string;
  translate3d: string;
  scale3d: string;
  rotate3d: string;
};

type CSSProperties = {
  'background-color': string;
  opacity: string;
  'transform-origin': string;
  perspective: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  color: string;
  'font-size': string;
  border: string;
  'border-radius': string;
  'box-shadow': string;
};
