import cloneDeep from 'lodash/cloneDeep';
import isPlainObject from 'lodash/isPlainObject';

import { ResponsiveProps } from '../../theme/ResponsiveProps/responsiveProps.models';
import { tokens } from '../../theme/tokens';

export const replaceTokens = <T = unknown>(
  props: ResponsiveProps<T>
): ResponsiveProps<T> => {
  const clonedObject = cloneDeep(props);

  for (const key in clonedObject) {
    const value = props[key];

    if (['string', 'number'].includes(typeof value)) {
      clonedObject[key] = tokens.sizes[value as string];
    }

    if (isPlainObject(value)) {
      for (const mediaKey in value) {
        clonedObject[key][mediaKey] =
          tokens.sizes[clonedObject[key][mediaKey as string]];
      }
    }
  }

  return clonedObject;
};
