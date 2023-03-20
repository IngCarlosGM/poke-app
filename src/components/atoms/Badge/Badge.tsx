/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

function Badge({ children }: { children: string }): JSX.Element {
  return (
    <span css={[tw`bg-secondary py-2 px-6 rounded-3xl text-fourth`]}>
      {children}
    </span>
  );
}

export default Badge;
