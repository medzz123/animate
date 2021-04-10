import { createContext, useContext } from 'react';

import { AnimationProvider } from './Animate.models';

export const AnimationStateWizardContext = createContext<AnimationProvider>(
  undefined
);
export const AnimationStateWizardConsumer =
  AnimationStateWizardContext.Consumer;
export const AnimationStateWizardProvider =
  AnimationStateWizardContext.Provider;

export function useAnimationStateContext() {
  return useContext<AnimationProvider>(AnimationStateWizardContext);
}
