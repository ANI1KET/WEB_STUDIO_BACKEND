import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { ErrorLogPayload } from '../../types/types.js';
import { LoggerService } from '../../logger/logger.service.js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    let type: string | undefined;
    // let stack: string | undefined;
    let status = 500;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      message = exception.message;
      status = exception.getStatus();
      // stack = exception.stack;
      type = exception.constructor.name;
    }
    // else if (exception instanceof ZodError) {
    //   status = exception.statusCode || 500;
    //   message = exception.message || 'Internal server error';
    // }
    else if (exception instanceof Error) {
      message = exception.message;
      // stack = exception.stack;
      type = exception.constructor.name;
    }

    this.logger.error(<ErrorLogPayload>{
      // Error details
      type,
      // stack,
      status,
      message,

      // Authenticated user
      user: request.user || null,

      // Request metadata
      ip: request.ip,
      url: request.url,
      body: request.body,
      query: request.query,
      params: request.params,
      method: request.method,
      // userAgent: request.headers['user-agent'],
    });

    response.status(status).json({
      status,
      message,
      // path: request.url,
      timeStamp: new Date().toISOString(),
    });
  }
}
