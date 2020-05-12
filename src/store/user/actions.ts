import { SET_MODE } from './constants';

export const setMode = (mode: string) => ({
  type: SET_MODE,
  payload: {
    mode
  }
});
