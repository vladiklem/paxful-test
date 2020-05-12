export type RatingT = {
  plus: number;
  minus: number;
}

export type UserT = {
  id: string;
  username: string;
  rating?: RatingT;
  mode?: string;
  avatarUrl?: string;
}

export type UserModeObj = {
  [key: string]: UserT;
}

export type AccountT = {
  mode: string;
}

export type InitialState = UserT & AccountT;

export type State = InitialState