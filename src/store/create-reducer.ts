import { Action } from 'redux';

export default function createReducer(
  initialState: any,
  handlers: any
) {
  return function callHanlder(state = initialState, action: Action<string>) {
    return Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}
