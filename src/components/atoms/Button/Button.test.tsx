import { render, screen } from '@testing-library/react';
import Button from './Button';

jest.mock(
  '../Icon/Icon',
  () =>
    ({ type, isLight }: { type: string; isLight: boolean }) =>
      <div>{`IconType ${type} isLight=${isLight}`}</div>
);

const onClickSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Button /> component', () => {
  test('should to render the button', () => {
    render(<Button text='Test button' type='primary' onClick={onClickSpy} />);
    screen.getByText('Test button');
    expect(screen).toMatchSnapshot();
  });

  test('should to render the button primary with icon as udefined', () => {
    render(<Button text='Test button' icon='search' onClick={onClickSpy} />);
    screen.getByText('Test button');
    expect(screen.getByRole('button')).toHaveTextContent(
      'IconType search isLight=true'
    );
  });

  test('should to render the button primary with icon light', () => {
    render(
      <Button
        text='Test button'
        type='primary'
        icon='search'
        onClick={onClickSpy}
      />
    );
    expect(screen.getByRole('button')).toHaveTextContent(
      'IconType search isLight=true'
    );
  });

  test('should to render the button secondary with icon dark', () => {
    render(
      <Button
        text='Test button'
        type='secondary'
        icon='search'
        onClick={onClickSpy}
      />
    );
    screen.getByText('Test button');
    expect(screen.getByRole('button')).toHaveTextContent(
      'IconType search isLight=undefined'
    );
  });

  test('should to render the button secondary without icon light', () => {
    render(
      <Button
        text='Test button'
        type='secondary'
        icon='search'
        onClick={onClickSpy}
      />
    );
    screen.getByText('Test button');
    expect(screen.getByRole('button')).not.toHaveTextContent(
      'IconType search isLight=true'
    );
  });

  test('should to render the button third without icon', () => {
    render(
      <Button
        text='Test button'
        type='third'
        icon='search'
        onClick={onClickSpy}
      />
    );
    screen.getByText('Test button');
    expect(screen.getByRole('button')).not.toHaveTextContent('isLight');
  });
});
