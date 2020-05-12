import { PAID, NOT_PAID, BUYER, SELLER } from '../constants';

export const getOpposite = (mode: string): string =>
  mode === BUYER ? SELLER : BUYER;

export const getStatus = (paid: boolean): string => 
  paid ? PAID : NOT_PAID;

export const getRandomTime = (min: number, max: number) =>
  Math.random() * (max - min) + min;