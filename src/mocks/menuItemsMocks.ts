import { type TypeMenuItem } from '../types/Types';

export const menuItemsMock: TypeMenuItem[] = [
  {
    label: 'Item 1',
    handlerMenuItem: () => {
      alert('Item 1');
    },
  },
  {
    label: 'Item 2',
    handlerMenuItem: () => {
      alert('Item 2');
    },
  },
];
