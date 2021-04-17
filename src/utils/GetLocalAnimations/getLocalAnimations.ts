import pickBy from 'lodash/pickBy';

export const getLocalAnimations = () => {
  const animationKey = window.localStorage.getItem('current');

  const localAnimations = pickBy({ ...localStorage }, (_, key) => {
    return key.includes('animation');
  });

  return { animationKey, localAnimations };
};
