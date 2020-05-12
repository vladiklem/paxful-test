import { MessageItemT } from '../../store/trades/reducer.types';

export type Props = {
  message: MessageItemT;
  currentUser: boolean;
  avatarUrl: string;
};