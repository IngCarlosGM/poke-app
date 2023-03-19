import { render, screen } from '@testing-library/react';
import getUsers from '../../../mocks/usersMock';
import AvatarDropdown from './AvatarDropdown';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('../atoms/Button/Button', () => () => <button>{'Im Button'}</button>);

jest.mock('../atoms/Dropdown/BasicDropdown', () => () => (
  <div>{'Im a AvatarDropdown'}</div>
));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <AvatarDropdown /> component', () => {
  const usersMock = getUsers()[0];

  test('should to render AvatarDropdown without props', () => {
    const { getByText } = render(
      <AvatarDropdown
        sourceAvatar={usersMock.sourceAvatar}
        hasHeader={true}
        isOpen={false}
      />
    );
    expect(screen).toMatchSnapshot();
    getByText('Im Button');
    getByText('Im a AvatarDropdown');
  });
});
