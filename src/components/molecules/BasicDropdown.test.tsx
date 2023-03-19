import { render, screen } from '@testing-library/react';
import getUsers from '../../mocks/usersMock';
import Dropdown from './Dropdown';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('../atoms/Button/Button', () => () => <button>{'Im Button'}</button>);

jest.mock('../atoms/Dropdown/BasicDropdown', () => () => (
  <div>{'Im a BasicDropdown'}</div>
));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Dropdown /> component', () => {
  const usersMock = getUsers()[0];

  test('should to render Dropdown with its props', () => {
    const { getByText } = render(
      <Dropdown
        sourceAvatar={usersMock.sourceAvatar}
        hasHeader={true}
        isOpen={false}
      />
    );
    expect(screen).toMatchSnapshot();
    getByText('Im Button');
    getByText('Im a BasicDropdown');
  });
});
