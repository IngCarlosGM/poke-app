import { type TypeTitle } from '../../../types/Types';
import { _TitleH1Styled, _TitleH2Styled, _TitleH3Styled } from './_TitleStyled';

function Title({
  children,
  type,
}: {
  children: string;
  type?: TypeTitle;
}): JSX.Element {
  return (
    <>
      {(type === 'h1' || type === undefined) && (
        <_TitleH1Styled>{children}</_TitleH1Styled>
      )}

      {type === 'h2' && <_TitleH2Styled>{children}</_TitleH2Styled>}

      {type === 'h3' && <_TitleH3Styled>{children}</_TitleH3Styled>}
    </>
  );
}

export default Title;
