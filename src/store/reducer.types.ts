import { State as UserState } from './user/reducer.types';
import { State as TradesState} from './trades/reducer.types';

export type AppState = {
  user: UserState;
  trades: TradesState;
};
