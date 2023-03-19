import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { menuItemsMock } from '../../../mocks/menuItemsMocks';
import _MenuItemDropdown from './_MenuItemDropdown';

jest.mock('twin.macro', () => () => 'Some tailwind class');

const handlerIsOpenSpy = jest.fn();
const handlerMenuItemSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <_MenuItemDropdown /> component', () => {
  test('should to render _HeaderDropdown without props', () => {
    const { getByRole, getByText } = render(
      <_MenuItemDropdown text={menuItemsMock[0].label} />
    );
    expect(screen).toMatchSnapshot();

    getByRole('link');
    getByText(menuItemsMock[0].label);
  });

  test('should to render _MenuItemDropdown without handlerMenuItem', () => {
    const { getByRole, getByText } = render(
      <_MenuItemDropdown
        text={menuItemsMock[0].label}
        handlerIsOpen={handlerIsOpenSpy}
      />
    );
    expect(screen).toMatchSnapshot();

    getByText(menuItemsMock[0].label);
    const tagLi = getByRole('listitem');

    const eventClickWrapper = createEvent.click(tagLi, { li: 1 });
    fireEvent(tagLi, eventClickWrapper);

    expect(handlerIsOpenSpy).toBeCalledTimes(1);
  });

  test('should to render _MenuItemDropdown with everyone props', () => {
    const { getByRole, getByText } = render(
      <_MenuItemDropdown
        text={menuItemsMock[0].label}
        handlerIsOpen={handlerIsOpenSpy}
        handlerMenuItem={handlerMenuItemSpy}
      />
    );
    expect(screen).toMatchSnapshot();

    getByText(menuItemsMock[0].label);
    const tagLi = getByRole('listitem');

    const eventClickWrapper = createEvent.click(tagLi, { li: 1 });
    fireEvent(tagLi, eventClickWrapper);

    expect(handlerIsOpenSpy).toBeCalledTimes(1);
    expect(handlerMenuItemSpy).toBeCalledTimes(1);
  });
});
