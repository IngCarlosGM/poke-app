/** @jsxImportSource @emotion/react */

import React from 'react';
import tw from 'twin.macro';
import { type TypeMenuItem } from '../../../types/Types';
import _HeaderDropdown from './_HeaderDropdown';
import _MenuItemDropdown from './_MenuItemDropdown';

function BasicDropdown({
  name,
  username,
  isOpen,
  handlerOpen,
  hasHeader,
  menuItems,
}: {
  name?: string;
  username?: string;
  isOpen: boolean;
  handlerOpen?: () => void;
  hasHeader: boolean;
  menuItems?: TypeMenuItem[];
}): JSX.Element {
  return (
    <div
      css={[
        tw`z-10 bg-white divide-solid divide-y divide-gray-100 rounded-lg shadow w-44 `,
        [isOpen ? tw`visible` : tw`hidden`],
      ]}
    >
      {hasHeader && (
        <_HeaderDropdown
          name={name}
          username={username}
          handlerIsOpen={handlerOpen}
        />
      )}
      <ul css={[tw`py-2 text-sm text-fourth pl-0 m-0 border-x-0`]}>
        {React.Children.toArray(
          menuItems?.map(({ label, handlerMenuItem }) => (
            <_MenuItemDropdown
              text={label}
              handlerIsOpen={handlerOpen}
              handlerMenuItem={handlerMenuItem}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default BasicDropdown;
