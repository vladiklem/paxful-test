import { combineReducers } from 'redux';

import { AppState } from './reducer.types';
import user from './user/reducer';
import trades from './trades/reducer';

export const reducer = combineReducers<AppState>({ user, trades });
