import { createState, useState } from '@hookstate/core';
import { none } from '@hookstate/core';
import parse from 'html-react-parser';
import inRange from 'lodash/inRange';
import { useEffect, useMemo } from 'react';

import * as animations from '../../animations';
import { getLocalAnimations } from '../../utils/GetLocalAnimations';
import { parseElements } from '../../utils/ParseAnimations';
import { AnimationState } from './animation.models';

export const animationState = createState<AnimationState>(() => {
  const { animationKey, localAnimations } = getLocalAnimations();

  if (
    localAnimations[animationKey] &&
    window.localStorage.getItem(animationKey) !== null
  ) {
    return JSON.parse(window.localStorage.getItem(animationKey));
  }

  if (animations[animationKey]) {
    return animations[animationKey];
  }

  window.localStorage.setItem('current', 'basic');

  return animations.basic;
});

export const useAnimationState = () => {
  const state = useState(animationState);

  const cleanState = state.get();

  const parsed = useMemo(() => {
    return parseElements(cleanState.elements);
  }, [cleanState.elements]);

  const { jsx, nodes } = useMemo(() => {
    return {
      jsx: parse(cleanState.markup),
      nodes: cleanState.markup
        .match(/id="(.*?)"/g)
        .map((val) => {
          return val.replace(/id="/g, '#').replace(`"`, '');
        })
        .join(', '),
    };
  }, [cleanState.markup]);

  useEffect(() => {
    const currentKey = window.localStorage.getItem('current');
    if (currentKey && currentKey.includes('animation-')) {
      window.localStorage.setItem(currentKey, JSON.stringify(cleanState));
    }
  }, [cleanState]);

  return {
    get react() {
      return jsx;
    },
    get nodes() {
      return nodes;
    },
    get playState() {
      return state['animation-play-state'].get();
    },
    get state() {
      return state.get();
    },
    get width() {
      return state.width.get();
    },
    get height() {
      return state.height.get();
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
      return parsed.mergeControls + parsed.mergeKeyframes;
    },
    get currentAnimationState() {
      const element = state.element.get();

      return state.elements[element].animationState.get();
    },
    get currentStepState() {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      return state.elements[element].steps[step].get();
    },
    mergeElements() {
      const currentElements = Object.keys(state.elements.get());

      const allElements = state.markup
        .get()
        .match(/id="(.*?)"/g)
        .map((val) => {
          return val.replace(/id="/g, '').replace(`"`, '');
        })
        .filter((e) => {
          return !currentElements.includes(e);
        })
        .reduce(
          (acc, curr) => (
            (acc[curr] = {
              animationState: {
                'animation-duration': '2s',
                'animation-timing-function': 'ease',
                'animation-delay': '0s',
                'animation-fill-mode': 'none',
                'animation-direction': 'normal',
                'animation-iteration-count': 'infinite',
              },
              step: 0,
              steps: {
                0: {
                  transform: {},
                  property: {},
                },
              },
            }),
            acc
          ),
          {}
        );

      state.elements.merge({ ...allElements });
    },
    togglePlayState() {
      const currentPlayState = state['animation-play-state'].get();
      state['animation-play-state'].set(
        currentPlayState === 'paused' ? 'running' : 'paused'
      );
    },
    pausePlayState() {
      state['animation-play-state'].set('paused');
    },
    setWidth(event: React.ChangeEvent<HTMLInputElement>) {
      state.width.set(Number(event.target.value));
    },
    setHeight(event: React.ChangeEvent<HTMLInputElement>) {
      state.height.set(Number(event.target.value));
    },
    addStep(step: number) {
      const currentSteps = state.elements[state.element.get()].steps.keys;

      if (inRange(step, 0, 101) && !currentSteps.includes(step)) {
        state.elements[state.element.get()].steps.merge({
          [step]: {
            property: {},
            transform: {},
          },
        });

        state.elements[state.element.get()].step.set(step);
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
      const elementToDelete = state.element.get();

      state.elements[elementToDelete].set(none);
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

      state.elements[element].steps[step]['transform'][event.target.name].set(
        event.target.value
      );
    },
    onPropertyChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = state.element.get();
      const step = state.elements[element].step.get();

      state.elements[element].steps[step]['property'][event.target.name].set(
        event.target.value
      );
    },
    onAnimationStateChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = state.element.get();

      state.elements[element].animationState[event.target.name].set(
        event.target.value
      );
    },
  };
};
