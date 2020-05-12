import { ADD_MESSAGE, DELETE_TRADE, READ_MESSAGE } from './constants';

export type AddMessageActionPayload = {
  tradeId: string;
  text: string;
  senderId: string;
  mode: string;
};

export type AddMessageAction = {
  type: typeof ADD_MESSAGE;
  payload: AddMessageActionPayload;
};

export type ReadMessageActionPayload = {
  tradeId: string;
  mode: string;
};

export type ReadMessageAction = {
  type: typeof READ_MESSAGE;
  payload: ReadMessageActionPayload;
}

export type DeleteTradeActionPayload = {
  tradeId: string;
};

export type DeleteTradeAction = {
  type: typeof DELETE_TRADE;
  payload: DeleteTradeActionPayload;
};
