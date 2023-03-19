import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import _HeaderDropdown from './_HeaderDropdown';
import getUsersMock from '../../../mocks/usersMock';

jest.mock('twin.macro', () => () => 'Some tailwind class');
const handlerClickHeaderSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <_HeaderDropdown /> component', () => {
  const userMock = getUsersMock()[0];

  test('should to render _HeaderDropdown without props', () => {
    const { container } = render(<_HeaderDropdown />);
    expect(screen).toMatchSnapshot();

    const wrapperDivParent = container.getElementsByClassName('css-pp7jsb')[0];
    expect(wrapperDivParent.children[0]).toBeEmptyDOMElement();

    const wrapperDivChild = container.getElementsByClassName('css-1pjt84d')[0];
    expect(wrapperDivChild.children[0]).toBeUndefined();
  });

  test('should to render _HeaderDropdown', () => {
    const { container } = render(
      <_HeaderDropdown
        name={userMock.name}
        username={userMock.username}
        handlerIsOpen={handlerClickHeaderSpy}
      />
    );
    expect(screen).toMatchSnapshot();
    screen.getByText(userMock.name);
    screen.getByText(userMock.username);

    const wrapperDivParent = container.getElementsByClassName('css-pp7jsb')[0];
    const eventClickWrapper = createEvent.click(wrapperDivParent, { div: 1 });
    fireEvent(wrapperDivParent, eventClickWrapper);

    expect(handlerClickHeaderSpy).toBeCalledTimes(1);
  });
});
