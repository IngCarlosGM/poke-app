import { type TypeIcon } from '../../../types/Types';
import _UserIcon from './_UserIcon';
import _SearchIcon from './_SearchIcon';
import _HideIcon from './_HideIcon';
import _ShowIcon from './_ShowIcon';
import _LogoIcon from './_LogoIcon';
import _ExitIcon from './_ExitIcon';
import _ArrowIcon from './_ArrowIcon';
import _CaretIcon from './_CaretIcon';

const Icon = ({
  type,
  isLight,
}: {
  type?: TypeIcon;
  isLight?: boolean;
}): JSX.Element => {
  return (
    <>
      {type === 'user' && <_UserIcon isLight={isLight} />}
      {type === 'search' && <_SearchIcon isLight={isLight} />}
      {type === 'show' && <_ShowIcon isLight={isLight} />}
      {type === 'hide' && <_HideIcon isLight={isLight} />}
      {type === 'logo' && <_LogoIcon />}
      {type === 'exit' && <_ExitIcon />}
      {type === 'right-arrow' && <_ArrowIcon leftDirection={false} isLight />}
      {type === 'left-arrow' && <_ArrowIcon leftDirection isLight />}
      {type === 'caret' && <_CaretIcon />}
    </>
  );
};

export default Icon;
