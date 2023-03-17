import tw from 'twin.macro';

export const _ButtonBaseStyled = tw.button`bg-white border-0 text-fourth w-2/5 md:w-40 lg:w-60 h-12 lg:h-14 flex justify-between items-center p-4 rounded-md cursor-pointer outline-1 outline-cyan-500`;

export const _PrimaryButtonsStyled = tw(
  _ButtonBaseStyled
)`bg-fourth border-0 text-white hover:text-white hover:font-bold hover:bg-opacity-75`;

export const _SecondaryButtonsStyled = tw(
  _ButtonBaseStyled
)`bg-secondary hover:font-bold hover:bg-opacity-50`;

export const _ThirdButtonsStyled = tw(
  _ButtonBaseStyled
)`bg-transparent hover:font-bold pl-2 hover:underline hover:underline-offset-4`;
