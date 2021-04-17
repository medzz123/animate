import { createState, useState } from '@hookstate/core';
import { none } from '@hookstate/core';
import parse from 'html-react-parser';
import inRange from 'lodash/inRange';
import { useMemo } from 'react';

import { basic } from '../../data/basic';
import { parseElements } from '../../utils/ParseAnimations';
import { AnimationState } from './animation.models';

const animationState = createState<AnimationState>(basic);

export const useAnimationState = () => {
  const state = useState(animationState);

  const parsed = useMemo(() => {
    return parseElements(state.elements.get());
  }, [state.elements]);

  const jsx = useMemo(() => {
    return parse(state.markup.get());
  }, [state.markup]);

  return {
    get react() {
      return jsx;
    },
    get state() {
      return state.get();
    },
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
    get parsed() {
      return parsed;
    },
    get currentState() {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      return state.elements[element].steps[step].get();
    },
    addStep(step: number) {
      const currentSteps = state.elements[state.element.get()].steps.keys;

      if (inRange(step, 0, 100) && !currentSteps.includes(step)) {
        state.elements[state.element.get()].steps.merge({
          [step]: {
            normal: {},
          },
        });
      }
    },
    deleteStep(step: number) {
      state.elements[state.element.get()].steps[step].set(none);
    },
    deleteCurrentStep() {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      state.elements[element].steps[step].set(none);
    },
    deleteElement(element: string) {
      state.elements[element].set(none);
    },
    deleteCurrentElement() {
      state.elements[state.element.get()].set(none);
    },
    setElement(element: string) {
      state.element.set(element);
    },
    setStep(step: number) {
      state.elements[state.element.get()].step.set(step);
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
