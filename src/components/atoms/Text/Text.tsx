import { _TextStyled } from './_TextStyled';

function Text({ children }: { children: string }): JSX.Element {
  return <_TextStyled>{children}</_TextStyled>;
}

export default Text;
