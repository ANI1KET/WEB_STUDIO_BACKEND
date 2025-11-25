import { Injectable } from '@nestjs/common';

import { ErrorLogPayload } from 'src/types/types.js';

@Injectable()
export class LoggerService {
  private formatMessage(level: string, message: string) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  info(message: string) {
    console.log(this.formatMessage('LOG', message));
  }

  warn(message: string) {
    console.warn(this.formatMessage('WARN', message));
  }

  error(payload: ErrorLogPayload) {
    console.log('Payload ', payload);
  }
}
