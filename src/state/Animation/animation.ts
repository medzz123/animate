import { createState, useState } from '@hookstate/core';
import { none } from '@hookstate/core';
import parse from 'html-react-parser';
import inRange from 'lodash/inRange';
import { useEffect, useMemo } from 'react';

import * as animations from '../../animations';
import { getLocalAnimations } from '../../utils/GetLocalAnimations';
import { parseElements } from '../../utils/ParseAnimations';
import { AnimationState } from './animation.models';

/**
 * Finds which animation to load and creates the local state for it
 */
export const animationState = createState<AnimationState>(() => {
  /**
   * Gets all local animations in the storage and they key which points
   * to the correct animation to load
   */
  const { animationKey, localAnimations } = getLocalAnimations();

  /**
   * If key relates to an animation saved to the storage, it loads that animation
   */
  if (
    localAnimations[animationKey] &&
    window.localStorage.getItem(animationKey) !== null
  ) {
    return JSON.parse(window.localStorage.getItem(animationKey));
  }

  /**
   * If key is part of basic preloaded animations it loads the correct one
   */
  if (animations[animationKey]) {
    return animations[animationKey];
  }

  /**
   * Failsafe if key is none of those it sets a new key and returns a basic animation
   */
  window.localStorage.setItem('current', 'basic');

  return animations.basic;
});

export const useAnimationState = () => {
  const state = useState(animationState);

  const cleanState = state.get();

  /**
   * Parses the animation code to generate the animations, by listening
   * when the state changes
   */
  const parsed = useMemo(() => {
    return parseElements({
      elements: cleanState.elements,
      playState: cleanState['animation-play-state'],
      activeElement: cleanState.element,
    });
  }, [
    cleanState.elements,
    cleanState['animation-play-state'],
    cleanState.element,
  ]);

  /**
   * Creates new jsx nodes whenever the target has been changed
   */
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

  /**
   * Saves animations to local storage if they are not part of the preloaded animations
   */
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

      if (element === undefined) {
        return undefined;
      }

      const step = state.elements[element].step.get();

      if (step === undefined) {
        return undefined;
      }

      return state.elements[element].steps[step].get();
    },
    /**
     * Whenever the initial markup is changed, take the current elements
     * in the animation and merge them with the old ones.
     *
     * This is done so in case the user accidentally deletes node they did not intend to
     */
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
    /**
     * Changes the transform state by the specified direction
     */
    move(direction: 'x' | 'y', unit: number) {
      const element = state.element.get();
      const step = state.elements[element].step.get();
      const currentTranslate = state.elements[element].steps[
        step
      ]?.transform?.translate?.get();

      /**
       * Matches regex on the current transform property, and extracts its values
       */
      const matches = currentTranslate?.match(
        /(?<xValue>-?\d*)(?<xUnit>.*),\s{1}(?<yValue>-?\d*)(?<yUnit>.*)/
      );

      /**
       * If match exists update the corresponding values
       */
      if (matches) {
        const {
          groups: { xValue, xUnit, yValue, yUnit },
        } = matches;

        state.elements[element].steps[step]['transform']['translate'].set(
          `${direction === 'x' ? Number(xValue) + unit : xValue}${xUnit}, ${
            direction === 'y' ? Number(yValue) + unit : yValue
          }${yUnit}`
        );
      }
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
