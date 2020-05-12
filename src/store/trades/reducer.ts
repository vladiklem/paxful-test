import createReducer from '../create-reducer';
import { ADD_MESSAGE, DELETE_TRADE, READ_MESSAGE } from './constants';
import { InitialStateT, State, TradeItemT } from './reducer.types';
import { AddMessageAction, DeleteTradeAction, ReadMessageAction } from './action.types';
import { mockedTradePart } from '../../data/trades';

const initialState: InitialStateT = [
  {
    id: '1',
    hash: '45aFD3rR',
    paymentMethod: 'Amazon Gift Card',
    amount: 30,
    paid: true,
    ...mockedTradePart
  },
  {
    id: '2',
    hash: '15adD33R',
    paymentMethod: 'iTunes Gift Card',
    amount: 15,
    paid: false,
    ...mockedTradePart,
  },
];

const handlers = {
  [ADD_MESSAGE]: (state: State, action: AddMessageAction) => ([
    ...state.reduce((accum: TradeItemT[], item: TradeItemT) =>
      item.id === action.payload.tradeId
        ? [
            ...accum,
            {
              ...item,
              [action.payload.mode]: { ...item[action.payload.mode], newMessages: true },
              chatHistory: [
                ...item.chatHistory,
                {
                  ts: Date.now(),
                  text: action.payload.text,
                  senderId: action.payload.senderId
                }
              ]
            }
          ]
        : [ ...accum, item ], [])
  ]),
  [DELETE_TRADE]: (state: State, action: DeleteTradeAction) => ([
    ...state.filter((trade: TradeItemT) => trade.id !== action.payload.tradeId)
  ]),
  [READ_MESSAGE]: (state: State, action: ReadMessageAction) => ([
    ...state.map(
      (item: TradeItemT) => item.id === action.payload.tradeId
        ? {
            ...item,
            [action.payload.mode]: { ...item[action.payload.mode], newMessages: false }
          }
        : item
    )
  ]),
};

export default createReducer(initialState, handlers);

