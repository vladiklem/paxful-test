import { TradeItemT } from 'store/trades/reducer.types';

export type Props = {
  trade: TradeItemT;
  selected: boolean;
  mode: string;
  onReadMessage: (id: string) => void;
}