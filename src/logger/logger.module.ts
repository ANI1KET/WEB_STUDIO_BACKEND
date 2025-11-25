import { Module } from '@nestjs/common';

import { LoggerService } from './logger.service.js';

@Module({
  exports: [LoggerService],
  providers: [LoggerService],
})
export class LoggerModule {}
