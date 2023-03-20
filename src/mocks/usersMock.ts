import { type TypeUser } from '../types/Types';

function getUsers(): TypeUser[] {
  return [
    {
      name: 'Carlos Gamboa',
      username: 'carlos@mail.com',
      sourceAvatar: 'https://cdn-icons-png.flaticon.com/512/4333/4333609.png',
    },
  ];
}

export default getUsers;
