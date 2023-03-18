import { _LabelStyled } from './_LabelStyled';

function Label({
  children,
  htmlFor,
}: {
  children: string;
  htmlFor?: string;
}): JSX.Element {
  return <_LabelStyled htmlFor={htmlFor}>{children}</_LabelStyled>;
}

export default Label;
