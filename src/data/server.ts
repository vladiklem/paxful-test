import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

import { BTCurl } from '../constants';

import { BTCResponseT, BTCErrorT } from './server.types';

const fetcher = (url: string) => {
  return axios
    .get(url)
    .then((response: AxiosResponse<BTCResponseT>) => response.data)
    .catch((e: BTCErrorT) => console.error(e));
};

export const useBTC = (time: number) => {
  return useSWR(
    BTCurl,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      refreshInterval: time,
    }
  );
};