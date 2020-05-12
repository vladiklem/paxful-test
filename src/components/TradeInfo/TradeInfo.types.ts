import { TradeItemT } from '../../store/trades/reducer.types';

export type Props = {
  onSwitchMode: () => void;
  trade: TradeItemT;
  mode: string;
}