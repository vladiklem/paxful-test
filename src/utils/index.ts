export const getOpposite = (mode: string): string =>
  mode === 'seller' ? 'buyer' : 'seller';

export const getStatus = (paid: boolean): string => 
  paid ? 'PAID' : 'NOT PAID';

export const getRandomTime = (min: number, max: number) =>
  Math.random() * (max - min) + min;