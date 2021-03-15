import { tokens } from './tokens';
/**
 * Media query function which will return a min-width media query with the breakpoint provided
 */
export const mq = (level: keyof typeof tokens.breakpoints) =>
  `@media (min-width: ${tokens.breakpoints[level]})`;
