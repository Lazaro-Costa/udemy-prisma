import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { handleDatabaseErrors } from 'src/common/utils/handle-database-error.util';
import { isPrismaError } from 'src/common/utils/is-prisma-error.util';
import { DatabaseError } from '../types/databaseError';

@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (isPrismaError(error)) {
          error = handleDatabaseErrors(error);
        }
        if (error instanceof DatabaseError) {
          throw new BadGatewayException(error.message);
        } else throw error;
      }),
    );
  }
}
