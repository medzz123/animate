import { createState, useState } from '@hookstate/core';
import { useEffect } from 'react';

import { animationState } from './Animation/animation';

type ArtboardState = {
  containerWidth: number;
  containerHeight: number;
  scale: number;
};

const artboardState = createState<ArtboardState>({
  containerHeight: 0,
  containerWidth: 0,
  scale: 0,
});

/**
 * State used to calculate the browser window, the element size and optimal scale
 * size to fill the artboard to its maximum size.
 */
export const useArtboardState = () => {
  const state = useState(artboardState);

  const width = useState(animationState.width).get();
  const height = useState(animationState.height).get();

  /**
   * Listens to resize events on a container and finds the
   * appropriate scale for the children
   */
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const targetToWatch = entries[0];

      state.containerWidth.set(targetToWatch.contentRect.width);
      state.containerHeight.set(targetToWatch.contentRect.height);
      state.scale.set(
        document.getElementById('aspect-ratio').clientWidth / width
      );
    });

    const elem = document.getElementById('parent');

    if (elem) {
      resizeObserver.observe(document.getElementById('parent'));
    }

    return () => {
      if (elem) {
        resizeObserver.unobserve(elem);
      }
    };
  }, [width, height]);

  return {
    get state() {
      return state.get();
    },
  };
};
