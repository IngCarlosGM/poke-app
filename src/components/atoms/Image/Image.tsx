import { _ImageStyled } from './_ImageStyled';

function Image({
  source,
  altText,
  width,
  height,
}: {
  source: string;
  altText?: string;
  width?: string;
  height?: string;
}): JSX.Element {
  return (
    <_ImageStyled src={source} alt={altText} width={width} height={height} />
  );
}

export default Image;
