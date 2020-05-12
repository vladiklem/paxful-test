import { ADD_MESSAGE, DELETE_TRADE, READ_MESSAGE } from './constants';
import { AddMessageAction, DeleteTradeAction, ReadMessageAction } from './action.types';

export const addMessage = (
  tradeId: string,
  text: string,
  senderId: string,
  mode: string
): AddMessageAction => ({
  type: ADD_MESSAGE,
  payload: {
    tradeId,
    text,
    senderId,
    mode
  }
});

export const deleteTrade = (tradeId: string): DeleteTradeAction => ({
  type: DELETE_TRADE,
  payload: {
    tradeId
  }
});

export const readMessage = (tradeId: string, mode: string): ReadMessageAction => ({
  type: READ_MESSAGE,
  payload: {
    tradeId,
    mode
  }
});
