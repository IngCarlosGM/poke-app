import { render, screen } from '@testing-library/react';

import Icon from './Icon';

jest.mock('./_UserIcon', () => () => 'UserIcon');

jest.mock('./_SearchIcon', () => () => 'SearchIcon');

jest.mock('./_ShowIcon', () => () => 'ShowIcon');

jest.mock('./_HideIcon', () => () => 'HideIcon');

jest.mock('./_LogoIcon', () => () => 'LogoIcon');

jest.mock('./_ExitIcon', () => () => 'ExitIcon');

jest.mock('./_CaretIcon', () => () => 'CaretIcon');

jest.mock(
  './_ArrowIcon',
  () =>
    ({ leftDirection }: { leftDirection: boolean }) =>
      `ArrowIcon ${leftDirection}`
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Icon /> component', () => {
  test('should to render icon user ', () => {
    render(<Icon type='user' />);
    screen.getByText('UserIcon');
  });

  test('should to render icon search ', () => {
    render(<Icon type='search' />);
    screen.getByText('SearchIcon');
  });

  test('should to render icon show ', () => {
    render(<Icon type='show' />);
    screen.getByText('ShowIcon');
  });

  test('should to render icon hide ', () => {
    render(<Icon type='hide' />);
    screen.getByText('HideIcon');
  });

  test('should to render icon logo ', () => {
    render(<Icon type='logo' />);
    screen.getByText('LogoIcon');
  });

  test('should to render icon exit ', () => {
    render(<Icon type='exit' />);
    screen.getByText('ExitIcon');
  });

  test('should to render icon exit ', () => {
    render(<Icon type='left-arrow' />);
    screen.getByText('ArrowIcon true');
  });

  test('should to render icon exit ', () => {
    render(<Icon type='right-arrow' />);
    screen.getByText('ArrowIcon false');
  });

  test('should to render icon caret ', () => {
    render(<Icon type='caret' />);
    screen.getByText('CaretIcon');
  });
});
