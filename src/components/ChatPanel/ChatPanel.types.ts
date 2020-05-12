// import { TradeItem } from '../../store/trades/reducer.types';

export type Props = {
  trade: any;
  userId: string;
  mode: string;
  onSendMessage: (id: string) => void;
  onDeleteTrade: (id: string) => void;
  setMessageText: (text: string) => void;
};
