import { createState, useState } from '@hookstate/core';

type EditorState = boolean;

const artboardState = createState<EditorState>(true);

export const useEditorState = () => {
  const state = useState(artboardState);

  return {
    get open() {
      return state.get();
    },
    toggle() {
      state.set((old) => !old);
    },
  };
};
