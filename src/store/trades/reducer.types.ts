import { User } from '../user/reducer.types';

export type InitialState = TradeItem[];

export type TradeItem = {
  id: string;
  hash: string;
  paymentMethod: string;
  amount: number;
  paid: boolean;
  chatHistory: MessageItem[];
  buyer: User & { newMessages: boolean };
  seller: User & { newMessages: boolean };
};

export type MessageItem = {
  ts: number;
  text: string;
  senderId: string;
};

export type Rating = {
  plus: number;
  minus: number;
};

export type State = InitialState;