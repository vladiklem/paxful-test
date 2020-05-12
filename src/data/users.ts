import { UserT, UserModeObj } from '../store/user/reducer.types';

export const selectUser = (mode: string): UserT => {
  const usersDB: UserModeObj = {
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