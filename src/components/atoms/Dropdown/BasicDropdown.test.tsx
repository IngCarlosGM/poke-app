import { getAllByText, render, screen } from '@testing-library/react';
import { menuItemsMock } from '../../../mocks/menuItemsMocks';
import BasicDropdown from './BasicDropdown';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('./_HeaderDropdown', () => () => <div>{'Im HeaderDropdown'}</div>);

jest.mock('./_MenuItemDropdown', () => () => <div>{'Im a MenuItem'}</div>);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <BasicDropdown /> component', () => {
  test('should to render BasicDropdown without props', () => {
    render(<BasicDropdown hasHeader={true} isOpen={false} />);
    expect(screen).toMatchSnapshot();
  });

  test('should to render the menu items', () => {
    const { container } = render(
      <BasicDropdown
        hasHeader={true}
        isOpen={false}
        menuItems={menuItemsMock}
      />
    );
    expect(screen).toMatchSnapshot();
    expect(getAllByText(container, 'Im a MenuItem').length).toBe(3);
  });
});
