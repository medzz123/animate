import {
  Path,
  Plugin,
  State,
  StateMethods,
  StateValueAtPath,
  StateValueAtRoot,
} from '@hookstate/core';
import cloneDeep from 'lodash/cloneDeep';

import { parseToCss } from '../../utils/ParseAnimations';

export interface ParseExtensions<S> {
  parsed(): string;
  get(): S | undefined;
}

class ParsePluginInstance {
  private initialState: StateValueAtRoot;
  constructor(initialValue: StateValueAtRoot) {
    this.initialState = cloneDeep(initialValue);
  }
  getInitial = (path: Path) => {
    let result = this.initialState;
    path.forEach((p) => {
      result = result && result[p];
    });
    return result;
  };

  parse = (l: StateMethods<StateValueAtPath>): string => {
    console.log('l', l.value.elements['node'].steps);
    return parseToCss({});
  };
}

const PluginID = Symbol('Parse');

export function Parse(): Plugin;
export function Parse<S>($this: State<S>): ParseExtensions<S>;
export function Parse<S>($this?: State<S>): Plugin | ParseExtensions<S> {
  if ($this) {
    const $th = $this as State<S>;
    const [instance] = $th.attach(PluginID);
    if (instance instanceof Error) {
      throw instance;
    }
    const inst = instance as ParsePluginInstance;
    return {
      get: () => inst.getInitial($th.path),
      parsed: () => inst.parse($th),
    };
  }
  return {
    id: PluginID,
    init: (state: State<StateValueAtRoot>) => {
      return new ParsePluginInstance(state.value) as unknown;
    },
  };
}
