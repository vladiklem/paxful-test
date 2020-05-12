import { UserT } from '../user/reducer.types';

export type MessageItemT = {
  ts: number;
  text: string;
  senderId: string;
};

export type TradeItemT = {
  id: string;
  hash: string;
  paymentMethod: string;
  amount: number;
  paid: boolean;
  chatHistory: MessageItemT[];
  buyer: UserT & { newMessages: boolean };
  seller: UserT & { newMessages: boolean };
  [key: string]: any;
};

export type InitialStateT = TradeItemT[];

export type RatingT = {
  plus: number;
  minus: number;
};

export type State = InitialStateT;