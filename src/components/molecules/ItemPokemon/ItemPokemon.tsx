/** @jsxImportSource @emotion/react */
import React from 'react';
import tw from 'twin.macro';
import { type ResponseData } from '../../../interfaces/ResponseData';
import { Image, Title } from '../../atoms';
import Badge from '../../atoms/Badge/Badge';

function ItemPokemon({
  pokemon,
  handlerClick,
}: {
  pokemon: ResponseData;
  handlerClick: () => void;
}): JSX.Element {
  return (
    <div
      css={[
        tw`flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer`,
      ]}
      onClick={handlerClick}
    >
      <div css={[tw`h-60 flex flex-col justify-between`]}>
        <Image
          source={pokemon.url}
          height='100%'
          width='100%'
          altText='Pokemon'
        />
        <footer css={[tw`flex justify-end items-center h-12 -mt-12 px-4`]}>
          <Badge>{pokemon.weight.toString()}</Badge>
        </footer>
      </div>

      <div css={[tw`bg-third h-24 p-4`]}>
        <Title type='h2'>{pokemon.name}</Title>

        <div css={[tw`overflow-hidden last:m-0`]}>
          {React.Children.toArray(
            pokemon.tags
              .slice(0, 4)
              .map(({ tag }) => (
                <span css={[tw`inline-block mr-2`]}>{tag}</span>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemPokemon;
