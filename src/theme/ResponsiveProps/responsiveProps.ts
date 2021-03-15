import { tokens } from '@theme/tokens';
import { camelCaseToKebabCase } from '@utils/CamelCaseToKebabCase';
import isPlainObject from 'lodash/isPlainObject';

import { mq } from '../mediaQueries';
import { ResponsiveProps } from './responsiveProps.models';

export const responsiveProps = <T>(props: ResponsiveProps<T>) => {
  let finalString = '';

  for (const key in props) {
    const value = props[key];

    if (typeof value === 'string') {
      const build = `${key}: ${value};`;

      finalString = finalString + build;
    }

    if (isPlainObject(value)) {
      const keys = Object.keys(value).map((k) => Number.parseInt(k));
      const min = Math.min(...keys);

      const build = `${key}: ${value[min]};`;

      finalString = finalString + build;

      for (const mediaKey in value) {
        const query = mq(mediaKey as keyof typeof tokens.breakpoints);
        const queryBuilder = `${query}{${key}: ${value[mediaKey]};}`;

        finalString = finalString + queryBuilder;
      }
    }
  }

  return camelCaseToKebabCase(finalString);
};
