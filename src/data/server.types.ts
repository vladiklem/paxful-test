export type BTCResponseT = {
  bpi: {
    USD: {
      code: string;
      rate: string;
      description: string;
      rate_float: number;
    }
  },
  disclaimer: string;
}

export type BTCErrorT = {
  response: {
    data: string
  }
}