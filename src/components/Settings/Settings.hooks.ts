import { useCallback, useState } from 'react';

export const useSettingsState = () => {
  const [state, setState] = useState(false);

  const handlers = useCallback(
    () => ({ toggle: () => setState((s) => !s) }),
    []
  );

  return { state, handlers };
};
