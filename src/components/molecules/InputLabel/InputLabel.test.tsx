import { render, screen } from '@testing-library/react';
import { getPatternEmail } from '../../../mocks/patternsMock';
import InputLabel from './InputLabel';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('../../atoms/Label/Label', () => () => <label>{'Im a label'}</label>);

jest.mock('../../atoms/Input/Input', () => () => <div>Im a input</div>);

const handleChangeEmailSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <InputLabel /> component', () => {
  test('should to render the inputlabel', () => {
    const { getByText } = render(
      <InputLabel
        textLabel='Text label'
        htmlFor='my-id'
        typeInput='email'
        valueInput='correo@mail.com'
        onChange={handleChangeEmailSpy}
        icon='user'
        pattern={getPatternEmail}
        idInput='my-id'
        placeholder='my-placeholder'
        inputName='name-input'
        required
      />
    );
    expect(screen).toMatchSnapshot();
    getByText('Im a label');
    getByText('Im a input');
  });
});
