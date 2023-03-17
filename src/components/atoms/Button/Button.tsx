import { type TypeIcon, type TypeButton } from '../../../types/Types';
import Icon from '../Icon/Icon';
import {
  _PrimaryButtonsStyled,
  _SecondaryButtonsStyled,
  _ThirdButtonsStyled,
} from './_ButtonsStyled';

function Button({
  text,
  icon,
  type,
  onClick,
}: {
  text: string;
  icon?: TypeIcon;
  type?: TypeButton;
  onClick: () => void;
}): JSX.Element {
  return (
    <>
      {(type === 'primary' || type === undefined) && (
        <_PrimaryButtonsStyled onClick={onClick}>
          {text}
          {Boolean(icon) && <Icon type={icon} isLight={true} />}
        </_PrimaryButtonsStyled>
      )}

      {type === 'secondary' && (
        <_SecondaryButtonsStyled onClick={onClick}>
          {text}
          {Boolean(icon) && <Icon type={icon} />}
        </_SecondaryButtonsStyled>
      )}

      {type === 'third' && (
        <_ThirdButtonsStyled onClick={onClick}>{text}</_ThirdButtonsStyled>
      )}
    </>
  );
}

export default Button;
