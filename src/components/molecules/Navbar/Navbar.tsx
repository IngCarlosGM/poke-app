/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

import { Icon, Title } from '../../atoms';
import AvatarDropdown from '../Dropdown/AvatarDropdown';
import { type TypeMenuItem, type TypeUser } from '../../../types/Types';

function Navbar({
  menuItems,
  user,
}: {
  menuItems?: TypeMenuItem[];
  user: TypeUser;
}): JSX.Element {
  return (
    <nav css={[tw`flex justify-between items-center h-16 bg-third px-4`]}>
      <div css={[tw`flex items-center gap-2`]}>
        <Icon type='logo' />
        <Title type='h1'>Poke App</Title>
      </div>
      <AvatarDropdown
        name={user.name}
        username={user.username}
        hasHeader
        isOpen={false}
        sourceAvatar={user.sourceAvatar}
        menuItems={menuItems}
      />
    </nav>
  );
}

export default Navbar;
