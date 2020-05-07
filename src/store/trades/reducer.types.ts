export type InitialState = Trade[];

export type Trade = {
  id: string;
  username: string;
  paymentMethod: string;
  amount: number;
  status: string;
  unreadeMessages: boolean;
}

export type State = InitialState;