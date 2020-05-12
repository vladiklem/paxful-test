// import { TradeItem } from '../../store/trades/reducer.types';

export type Props = {
  trade: any;
  selected: boolean;
  mode: string;
  onReadMessage: (id: string) => void;
}