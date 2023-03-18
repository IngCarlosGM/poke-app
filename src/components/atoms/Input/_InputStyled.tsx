import tw, { styled } from 'twin.macro';

export const _InputStyled = styled.input`
  ${tw`text-fourth text-sm rounded-md h-8 p-1 pr-10 pl-2 outline-cyan-500 border border-solid border-2 invalid:border-red-500`}
  ${({ isSubmit }: { isSubmit: boolean }) =>
    isSubmit &&
    tw`bg-fourth text-white w-40 h-10 text-center hover:bg-opacity-70 pr-3 cursor-pointer`}
`;
