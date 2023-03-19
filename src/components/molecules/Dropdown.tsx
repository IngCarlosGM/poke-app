/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { type TypeMenuItem } from '../../types/Types';
import { BasicDropdown, Button } from '../atoms';

function Dropdown({
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
    <div css={[tw`flex flex-col items-end w-24 sm:w-60 h-8 md:h-12`]}>
      <Button text='Abrir' onClick={handlerOpen} type='primary' />

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

export default Dropdown;
