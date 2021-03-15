export const camelCaseToKebabCase = (string: string) =>
  string.replace(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}-${p2.toLowerCase()}`);
