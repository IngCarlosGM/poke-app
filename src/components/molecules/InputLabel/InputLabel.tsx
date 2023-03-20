/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

import { type TypeInput, type TypeIcon } from '../../../types/Types';
import { Input, Label } from '../../atoms';

function InputLabel({
  textLabel,
  htmlFor,
  idInput,
  typeInput,
  icon,
  valueInput,
  placeholder,
  inputName,
  pattern,
  required,
  onChange,
}: {
  textLabel: string;
  htmlFor?: string;
  idInput?: string;
  typeInput?: TypeInput;
  icon?: TypeIcon;
  valueInput: string;
  placeholder?: string;
  inputName?: string;
  pattern?: string;
  required?: boolean;
  onChange?: (newValue: string) => void;
}): JSX.Element {
  return (
    <div css={[tw`flex flex-col`]}>
      <Label htmlFor={htmlFor}>{textLabel}</Label>
      <Input
        id={idInput}
        type={typeInput}
        icon={icon}
        placeholder={placeholder}
        name={inputName}
        pattern={pattern}
        required={required}
        onChange={onChange}
        value={valueInput}
      />
    </div>
  );
}

export default InputLabel;
