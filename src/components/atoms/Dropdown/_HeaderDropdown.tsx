/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

function _HeaderDropdown({
  name,
  username,
  handlerIsOpen,
}: {
  name?: string;
  username?: string;
  handlerIsOpen?: () => void;
}): JSX.Element {
  return (
    <div css={[tw`px-4 py-3 text-sm text-fourth`]} onClick={handlerIsOpen}>
      <div>{name}</div>
      <div css={[tw`font-medium truncate`]}>{username}</div>
    </div>
  );
}

export default _HeaderDropdown;
