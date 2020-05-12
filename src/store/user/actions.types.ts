import { SET_MODE } from './constants';

export type SetModeActionPayload = {
  mode: string;
};

export type SetModeAction = {
  type: typeof SET_MODE;
  payload: SetModeActionPayload;
};
