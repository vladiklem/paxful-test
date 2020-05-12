import { User } from '../store/user/reducer.types';

export const selectUser = (mode: string): User => {
  const usersDB: any = {
    seller: {
      mode: 'seller',
      id: '17',
      username: 'Lora'
    },
    buyer: {
      mode: 'buyer',
      id: '13',
      username: 'Chanaar'
    },
  }

  return usersDB[mode];
};