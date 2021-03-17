import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    pathname: '/',
    route: '/',
    asPath: '/',
    query: '',
  })),
}));
