export type RatingT = {
  plus: number;
  minus: number;
}

export type UserT = {
  id: string;
  username: string;
  rating?: RatingT;
  avatarUrl?: string;
}

export type UserModeObj = {
  [key: string]: UserT & AccountT;
}

export type AccountT = {
  mode: string;
}

export type InitialState = UserT & AccountT;

export type State = InitialState