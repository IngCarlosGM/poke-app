/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { type TypeMenuItem } from '../../../types/Types';
import { BasicDropdown, Icon, Image } from '../../atoms';

function AvatarDropdown({
  sourceAvatar,
  name,
  username,
  hasHeader,
  isOpen,
  menuItems,
}: {
  sourceAvatar: string;
  name?: string;
  username?: string;
  isAvatar?: boolean;
  hasHeader: boolean;
  isOpen: boolean;
  menuItems?: TypeMenuItem[];
}): JSX.Element {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
  }, []);

  const handlerOpen = (): void => {
    setShow(!show);
  };

  return (
    <div css={[tw`flex flex-col items-end w-16 md:w-24 h-10 sm:h-12`]}>
      <div
        css={[tw`flex items-center cursor-pointer h-12`]}
        onClick={handlerOpen}
      >
        <div
          css={[
            tw`flex items-center rounded-full block overflow-hidden w-10 h-10 sm:w-24 md:w-16 md:h-12 mr-1`,
          ]}
        >
          <Image source={sourceAvatar} height='100%' />
        </div>
        <Icon type='caret' />
      </div>

      <BasicDropdown
        name={name}
        username={username}
        isOpen={show}
        hasHeader={hasHeader}
        handlerOpen={handlerOpen}
        menuItems={menuItems}
      />
    </div>
  );
}

export default AvatarDropdown;
