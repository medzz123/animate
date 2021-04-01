import pickBy from 'lodash/pickBy';
import { useEffect, useState } from 'react';

export const useBrowseHooks = () => {
  const [animations, setAnimations] = useState([]);

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
