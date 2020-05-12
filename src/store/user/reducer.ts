import createReducer from '../create-reducer';

import { selectUser } from 'data/users';
import { SET_MODE } from './constants';
import { SetModeAction } from './actions.types';
import { InitialState, State } from './reducer.types';

const initialState: InitialState = {
  mode: 'seller',
  id: '17',
  username: 'Lora',
  rating: {
    plus: 42,
    minus: 23
  },
  avatarUrl: 'avatar-2.png'
};

const handlers = {
  [SET_MODE]: (state: State, action: SetModeAction) =>
    selectUser(action.payload.mode),
};

export default createReducer(initialState, handlers);
