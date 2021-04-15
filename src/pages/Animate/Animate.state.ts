import { createState, useState } from '@hookstate/core';

type BasicState = {
  markup: string;
  css: string;
};

const globalState = createState<BasicState>({
  markup: '<div id="node"></div>',
  css: `.node {
    background-color: red;
    width: 40px;
    height: 40px;
}`,
});

export const useGlobalState = () => {
  const state = useState(globalState);

  return {
    get markup() {
      return state.markup.get();
    },
    get css() {
      return state.css.get();
    },
    onChangeMarkup(input: string) {
      state.markup.set(input);
    },
    onChangeCss(input: string) {
      state.css.set(input);
    },
  };
};
