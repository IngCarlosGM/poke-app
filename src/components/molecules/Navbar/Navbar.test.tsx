import { render, screen } from '@testing-library/react';
import { menuItemsMock } from '../../../mocks/menuItemsMocks';
import getUsers from '../../../mocks/usersMock';
import Navbar from './Navbar';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('../../atoms/Icon/Icon', () => () => <div>{'Im a Icon'}</div>);

jest.mock('../../atoms/Title/Title', () => () => <div>{'Im a Title'}</div>);

jest.mock('../Dropdown/AvatarDropdown', () => () => (
  <div>{'Im a AvatarDropdown'}</div>
));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <Navbar /> component', () => {
  const userMock = getUsers()[0];

  test('should to render Navbar with its props', () => {
    const { getByText } = render(
      <Navbar user={userMock} menuItems={menuItemsMock} />
    );
    expect(screen).toMatchSnapshot();
    getByText('Im a Icon');
    getByText('Im a Title');
    getByText('Im a AvatarDropdown');
  });
});
