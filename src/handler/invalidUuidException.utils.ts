import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class InvalidUuidExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.message.includes('invalid input syntax for type uuid')) {
      response.status(400).json({
        statusCode: 400,
        message: 'Invalid UUID format provided.',
      });
    } else {
      response.status(500).json({
        statusCode: 500,
        message: 'Internal server error.',
      });
    }
  }
}
