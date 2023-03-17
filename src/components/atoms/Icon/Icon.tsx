import _UserIcon from './_UserIcon';
import _SearchIcon from './_SearchIcon';
import _HideIcon from './_HideIcon';
import _ShowIcon from './_ShowIcon';
import _LogoIcon from './_LogoIcon';
import _ExitIcon from './_ExitIcon';
import _ArrowIcon from './_ArrowIcon';
import { type TypeIcon } from '../../../types/Types';

const Icon = ({ type }: { type?: TypeIcon }): JSX.Element => {
  return (
    <>
      {type === 'user' && <_UserIcon />}
      {type === 'search' && <_SearchIcon />}
      {type === 'show' && <_ShowIcon />}
      {type === 'hide' && <_HideIcon />}
      {type === 'logo' && <_LogoIcon />}
      {type === 'exit' && <_ExitIcon />}
      {type === 'right-arrow' && <_ArrowIcon leftDirection={false} />}
      {type === 'left-arrow' && <_ArrowIcon leftDirection />}
    </>
  );
};

export default Icon;
