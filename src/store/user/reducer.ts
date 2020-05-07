import createReducer from '../create-reducer';

import { InitialState } from './reducer.types';

const initialState: InitialState = {
  accessToken: null,
};

const handlers = {};

export default createReducer(initialState, handlers);
