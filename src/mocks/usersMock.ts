import { type TypeUser } from '../types/Types';

function getUsers(): TypeUser[] {
  return [
    {
      name: 'Carlos Gamboa',
      username: 'carlos@mail.com',
      sourceAvatar:
        'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
    },
  ];
}

export default getUsers;
