import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { pokemonMock } from '../../../mocks/pokemonMock';
import ItemPokemon from './ItemPokemon';

jest.mock('twin.macro', () => () => 'Some tailwind class');

jest.mock('../../atoms/Image/Image', () => () => <div>{'Im a Image'}</div>);

jest.mock('../../atoms/Badge/Badge', () => () => <div>{'Im a Badge'}</div>);

jest.mock('../../atoms/Title/Title', () => () => <div>{'Im a Title'}</div>);

const handlerClickSpy = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing <ItemPokemon /> component', () => {
  const pokemon = pokemonMock[0];

  test('should to render ItemPokemon with its props', () => {
    const { container, getByText } = render(
      <ItemPokemon pokemon={pokemon} handlerClick={handlerClickSpy} />
    );
    expect(screen).toMatchSnapshot();

    const wrapperDivParent = container.getElementsByClassName(
      'css-1mnejvq-ItemPokemon'
    )[0];
    const eventClickWrapper = createEvent.click(wrapperDivParent, { div: 1 });
    fireEvent(wrapperDivParent, eventClickWrapper);

    expect(handlerClickSpy).toBeCalledTimes(1);

    getByText('Im a Image');
    getByText('Im a Badge');
    getByText('Im a Title');
  });
});
