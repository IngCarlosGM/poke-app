import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { pattern } from '../../../mocks/patterns';
import Input from './Input';

jest.mock(
  '../Icon/Icon',
  () =>
    ({ type }: { type: string; isLight: boolean }) =>
      <div>{`IconType ${type}`}</div>
);

jest.mock('twin.macro', () => () => 'Some tailwind class');

const handleChangeEmailSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Input /> component', () => {
  test('should to render the input type password', () => {
    render(
      <Input
        type='email'
        value='correo@mail.com'
        onChange={handleChangeEmailSpy}
        icon='user'
        pattern={pattern}
        id='my-id'
        placeholder='my-placeholder'
        name='name-input'
        required
      />
    );
    expect(screen).toMatchSnapshot();
    screen.getByText('IconType user');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'value',
      'correo@mail.com'
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('pattern', pattern);
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-id');
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'my-placeholder'
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'name-input');
    expect(screen.getByRole('textbox')).toHaveAttribute('required', '');
  });

  test('should to render the input', () => {
    render(
      <Input
        type='password'
        value='correo@mail.com'
        onChange={handleChangeEmailSpy}
        icon='user'
        pattern={pattern}
        id='password'
      />
    );
    expect(screen).toMatchSnapshot();
    screen.getByText('IconType hide');
  });

  test('should to allow change text', () => {
    const { getByRole } = render(
      <Input
        type='email'
        value=''
        onChange={handleChangeEmailSpy}
        pattern={pattern}
      />
    );
    const inputText = getByRole('textbox');
    expect(screen).toMatchSnapshot();

    fireEvent.change(inputText, { target: { value: 'correo2@mail.com' } });

    expect(handleChangeEmailSpy).toHaveBeenCalledTimes(1);
  });

  test('should to allow change icon password', () => {
    const { container } = render(
      <Input type='password' value='password' onChange={handleChangeEmailSpy} />
    );
    const wrapperIcon = container.getElementsByClassName('css-ns3edj-Input')[0];
    const eventClickWrapper = createEvent.click(wrapperIcon, { div: 1 });
    fireEvent(wrapperIcon, eventClickWrapper);

    const inputText = screen.getByRole('textbox');
    expect(inputText).toHaveAttribute('type', 'text');

    fireEvent(wrapperIcon, eventClickWrapper);

    expect(inputText).not.toHaveAttribute('type', 'text');

    expect(screen).toMatchSnapshot();
  });
});
