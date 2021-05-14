import { createContext, useCallback, useContext, useState } from 'react';

interface DialogContextValues extends DialogState {
  set: (state: { field: string; value: unknown }) => void;
}

interface DialogState {
  load: boolean;
  target: boolean;
  exp: boolean;
  help: boolean;
}

const DialogContext = createContext<DialogContextValues>(undefined);
export const DialogProvider = DialogContext.Provider;

export const initDialogContext = () => {
  const [state, setState] = useState<DialogState>({
    load: false,
    target: false,
    exp: false,
    help: false,
  });

  const set = useCallback((newState) => {
    const { field, value } = newState;

    setState((s) => ({ ...s, [field]: value }));
  }, []);

  return { ...state, set };
};

export function useDialogContext() {
  return useContext<DialogContextValues>(DialogContext);
}
