import { TradeItemT } from 'store/trades/reducer.types';

export type Props = {
  trade: TradeItemT;
  userId: string;
  mode: string;
  messageText: string;
  onSendMessage: (id: string) => void;
  onDeleteTrade: (id: string) => void;
  setMessageText: (text: string) => void;
};
