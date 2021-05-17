import pickBy from 'lodash/pickBy';

/**
 * Gets all animations saved in local storage by checking which
 * keys contains the name animation
 */
export const getLocalAnimations = () => {
  const animationKey = window.localStorage.getItem('current');

  const localAnimations = pickBy({ ...localStorage }, (_, key) => {
    return key.includes('animation');
  });

  return { animationKey, localAnimations };
};
