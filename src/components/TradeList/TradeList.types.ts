import { TradeItem } from '../../store/trades/reducer.types';

export type Props = {
  list: TradeItem[];
  selectedId: string;
  mode: string;
  onReadMessage: (id: string) => void;
}