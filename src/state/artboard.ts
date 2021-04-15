import { createState, useState } from '@hookstate/core';

type ArtboardState = {
  width: number;
  height: number;
  containerWidth: number;
  containerHeight: number;
  scale: number;
};

const artboardState = createState<ArtboardState>({
  width: 800,
  height: 600,
  containerHeight: 0,
  containerWidth: 0,
  scale: 0,
});

export const useArtboardState = () => {
  const state = useState(artboardState);

  console.log(state);

  return {
    get state() {
      return state.get();
    },
    setWidth(event: React.ChangeEvent<HTMLInputElement>) {
      state.width.set(Number(event.target.value));
    },
    setHeight(event: React.ChangeEvent<HTMLInputElement>) {
      state.height.set(Number(event.target.value));
    },
  };
};
