import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClient';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;
    super(`A record with ${uniqueField} already exists`);
  }
}
