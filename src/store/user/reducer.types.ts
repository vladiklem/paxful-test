export type Rating = {
  plus: number;
  minus: number;
}

export type User = {
  id: string;
  username: string;
  rating: Rating;
  avatarUrl?: string;
}

export type Account = {
  mode: string;
}

export type InitialState = User & Account;

export type State = InitialState