/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

function _MenuItemDropdown({
  text,
  handlerIsOpen,
  handlerMenuItem,
}: {
  text: string;
  handlerIsOpen?: () => void;
  handlerMenuItem?: () => void;
}): JSX.Element {
  const handerClick = (): void => {
    if (handlerMenuItem !== undefined) {
      handlerMenuItem();
    }
    if (handlerIsOpen !== undefined) {
      handlerIsOpen();
    }
  };

  return (
    <li css={[tw`list-none`]} onClick={handerClick}>
      <a
        href='#'
        css={[
          tw`block px-4 py-2 hover:bg-gray-100 no-underline visited:text-fourth`,
        ]}
      >
        {text}
      </a>
    </li>
  );
}

export default _MenuItemDropdown;
