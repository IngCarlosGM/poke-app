/** @jsxImportSource @emotion/react */
import { type TypeIcon, type TypeInput } from '../../../types/Types';
import Icon from '../Icon/Icon';
import { _InputStyled } from './_InputStyled';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';

function Input({
  id,
  type,
  icon,
  value,
  placeholder,
  name,
  pattern,
  required,
  onChange,
}: {
  id?: string;
  type?: TypeInput;
  icon?: TypeIcon;
  value: string;
  placeholder?: string;
  name?: string;
  pattern?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  const [typeIconShow, setTypeIconShow] = useState<TypeIcon>();
  const [typeInput, setTypeInput] = useState<TypeInput>();

  useEffect(() => {
    type === 'password' ? setTypeIconShow('hide') : setTypeIconShow(icon);
    setTypeInput(type);
  }, []);

  const handlerShowPassword = (): void => {
    if (type === 'password' && typeIconShow !== 'show') {
      setTypeIconShow('show');
      setTypeInput('text');
    } else if (type === 'password') {
      setTypeIconShow('hide');
      setTypeInput(type);
    }
  };

  return (
    <div css={[tw`flex items-center w-min`]}>
      <_InputStyled
        id={id}
        type={typeInput}
        value={value}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        required={required}
        onChange={onChange}
        isSubmit={type === 'submit'}
      />
      <div
        css={[
          tw`-ml-8 mt-1`,
          [type === 'password' ? tw`cursor-pointer` : tw`cursor-auto`],
        ]}
        onClick={handlerShowPassword}
      >
        <Icon type={typeIconShow} />
      </div>
    </div>
  );
}

export default Input;
