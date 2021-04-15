import { createState, useState } from '@hookstate/core';

import { basic } from '../data/basic';

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

const animationState = createState<AnimationState>(basic);

export const useAnimationState = () => {
  const state = useState(animationState);

  return {
    get markup() {
      return state.markup.get();
    },
    get currentElement() {
      return state.element.get();
    },
    get currentStep() {
      return state.elements[state.element.get()].step.get();
    },
    get css() {
      return state.css.get();
    },
    get currentState() {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      return state.elements[element].steps[step].get();
    },
    onChangeMarkup(input: string) {
      state.markup.set(input);
    },
    onChangeCss(input: string) {
      state.css.set(input);
    },
    onTransformChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      state.elements[element].steps[step].transform[event.target.name].set(
        event.target.value
      );
    },
    onAnimationPropertyChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      state.elements[element].steps[step].normal[event.target.name].set(
        event.target.value
      );
    },
  };
};
