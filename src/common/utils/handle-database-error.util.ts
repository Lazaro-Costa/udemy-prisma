import { PrismaClientError } from '../errors/types/PrismaClient';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';
import { DatabaseError } from '../errors/types/databaseError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
}
export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
