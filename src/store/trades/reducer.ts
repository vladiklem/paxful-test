import createReducer from '../create-reducer';
import { ADD_MESSAGE, DELETE_TRADE, READ_MESSAGE } from './constants';
import { InitialState, State, TradeItem } from './reducer.types';
import { AddMessageAction, DeleteTradeAction, ReadMessageAction } from './action.types';

const initialState: InitialState = [
  {
    id: '1',
    hash: '45aFD3rR',
    paymentMethod: 'Amazon Gift Card',
    amount: 30,
    paid: true,
    buyer: {
      id: '13',
      username: 'Chanaaar',
      avatarUrl: 'avatar-1.png',
      newMessages: false,
      rating: {
        plus: 37,
        minus: 1
      }
    },
    seller: {
      id: '17',
      username: 'Lora',
      avatarUrl: 'avatar-2.png',
      newMessages: false,
      rating: {
        plus: 42,
        minus: 23
      }
    },
    chatHistory: [
      {
        ts: Date.now(),
        text: 'Lorem ipsum',
        senderId: '13',
      }
    ]
  },
  {
    id: '2',
    hash: '15adD33R',
    paymentMethod: 'iTunes Gift Card',
    amount: 15,
    paid: false,
    buyer: {
      id: '13',
      username: 'Chanaaar',
      avatarUrl: 'avatar-1.png',
      newMessages: false,
      rating: {
        plus: 37,
        minus: 1
      }
    },
    seller: {
      id: '17',
      username: 'Lora',
      avatarUrl: 'avatar-2.png',
      newMessages: false,
      rating: {
        plus: 42,
        minus: 23
      }
    },
    chatHistory: [
      {
        ts: Date.now(),
        text: 'kek lol',
        senderId: '13',
      }
    ]
  },
];

const handlers = {
  [ADD_MESSAGE]: (state: State, action: AddMessageAction) => ([
    ...state.reduce((accum: TradeItem[], item: any) =>
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
    ...state.filter(trade => trade.id !== action.payload.tradeId)
  ]),
  [READ_MESSAGE]: (state: State, action: ReadMessageAction) => ([
    ...state.reduce((accum: TradeItem[], item: any) =>
      item.id === action.payload.tradeId
        ? [
            ...accum,
            {
              ...item,
              [action.payload.mode]: { ...item[action.payload.mode], newMessages: false },
            }
          ]
        : [ ...accum, item ], [])
  ]),
};

export default createReducer(initialState, handlers);

