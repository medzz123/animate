import { useCallback, useState } from 'react';

import {
  ArtboardSizeControllerReturn,
  ArtboardSizeControllerState,
} from './ArtboardSizeController.models';

export const useArtboardSizeController = (
  initialWidth: number,
  initialHeight: number
): ArtboardSizeControllerReturn => {
  const [state, setState] = useState<ArtboardSizeControllerState>(() => ({
    width: initialWidth,
    height: initialHeight,
  }));

  const setSize = useCallback((width?: number, height?: number) => {
    setState((s) => ({ ...s, width, height }));
  }, []);

  return {
    state,
    setSize,
  };
};
