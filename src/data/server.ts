import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

import { BTCResponseT, BTCErrorT } from './server.types';

const fetcher = (url: string) => {
  axios
    .get(url)
    .then((response: AxiosResponse<BTCResponseT>) => response.data)
    .catch((e: BTCErrorT) => console.error(e));
};

export const useBTC = () => {
  return useSWR(
    'api.coindesk.com/v1/bpi/currentprice/USD.json',
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      refreshInterval: 60000,
    }
  );
};