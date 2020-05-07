import createReducer from '../create-reducer';
import { InitialState } from './reducer.types';

const initialState: InitialState = [];

const handlers = {};

export default createReducer(initialState, handlers);

