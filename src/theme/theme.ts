export interface Theme {
  background: string;
  headline: string;
  paragraph: string;
  button: string;
  buttonText: string;

  secondaryBackground: string;
  secondaryHeadline: string;
  secondaryParagraph: string;
}

const purple: Theme = {
  background: '#232946',
  headline: '#fffffe',
  paragraph: '#b8c1ec',
  button: '#eebbc3',
  buttonText: '#232946',
  secondaryBackground: '#d4d8f0',
  secondaryHeadline: '#232946',
  secondaryParagraph: '#232946',
};

const forest: Theme = {
  background: '#004643',
  headline: '#fffffe',
  paragraph: '#abd1c6',
  button: '#f9bc60',
  buttonText: '#001e1d',
  secondaryBackground: '#abd1c6',
  secondaryHeadline: '#001e1d',
  secondaryParagraph: '#0f3433',
};

const night: Theme = {
  background: '#0f0e17',
  headline: '#fffffe',
  paragraph: '#a7a9be',
  button: '#ff8906',
  buttonText: '#fffffe',
  secondaryBackground: '#fffffe',
  secondaryHeadline: '#0f0e17',
  secondaryParagraph: '#2e2f3e',
};

const solaris: Theme = {
  background: '#fffffe',
  headline: '#272343',
  paragraph: '#2d334a',
  button: '#fcd500',
  buttonText: '#272343',
  secondaryBackground: '#319a94',
  secondaryHeadline: '#272343',
  secondaryParagraph: '#2d334a',
};

const light: Theme = {
  background: '#ffffff',
  headline: '#000000',
  paragraph: '#131415',
  button: '#2196f3',
  buttonText: '#131415',
  secondaryBackground: '#242629',
  secondaryHeadline: '#ffffff',
  secondaryParagraph: '#ffffff',
};

export const themes = {
  purple,
  forest,
  night,
  solaris,
  light,
};
