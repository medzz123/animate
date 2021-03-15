import { replaceTokens } from './replaceTokens';

export const exampleProps = {
  padding: 10,
  margin: { 480: 10, 375: 20 },
};

test('Replace tokens should convert all tokens keys to actual values', () => {
  const parsed = replaceTokens(exampleProps);

  expect(parsed).toMatchObject({
    padding: '0.625rem',
    margin: { '375': '1.25rem', '480': '0.625rem' },
  });
});
