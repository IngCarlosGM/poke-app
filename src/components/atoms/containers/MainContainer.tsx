import { _MainContainerStyled } from './_MainContainerStyled';

function MainContainer({ children }: { children: JSX.Element }): JSX.Element {
  return <_MainContainerStyled>{children}</_MainContainerStyled>;
}

export default MainContainer;
