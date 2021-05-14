import { responsiveProps } from './responsiveProps';

const exampleProps = {
  padding: '10px',
  backgroundColor: {
    480: 'red',
    992: 'yellow',
  },
};

test('Responsive props should parse CSS properties to their media queries keys', () => {
  const parsed = responsiveProps(exampleProps);

  expect(parsed).toBe(
    'padding: 10px;background-color: red;@media (min-width: 30rem){background-color: red;}@media (min-width: 62rem){background-color: yellow;}'
  );
});
