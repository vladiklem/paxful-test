import { TradeItemT } from 'store/trades/reducer.types';

export type Props = {
  list: TradeItemT[];
  selectedId: string;
  mode: string;
  onReadMessage: (id: string) => void;
}