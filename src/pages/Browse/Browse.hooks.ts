import pickBy from 'lodash/pickBy';
import { useEffect, useState } from 'react';

export const useBrowseHooks = () => {
  const [animations, setAnimations] = useState([]);

  /**
   * Goes through the local storage and finds all storage objects
   * that contains the name `animation` in their key
   *
   * It parses those objects and sets them in state
   */
  useEffect(() => {
    const filtered = pickBy({ ...localStorage }, (_, key) => {
      return key.includes('animation');
    });

    const arr = Object.keys(filtered).map((key) => ({
      key,
      value: JSON.parse(filtered[key]),
    }));

    setAnimations(arr);
  }, []);

  return { animations };
};
