import { PrismaClientError } from '../errors/types/PrismaClient';

export const isPrismaError = (error: PrismaClientError): boolean => {
  return (
    typeof error.code === 'string' &&
    typeof error.clientVersion === 'string' &&
    (typeof error.meta === 'object' || typeof error.meta === 'undefined')
  );
};
