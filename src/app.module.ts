import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { LoggerModule } from './logger/logger.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { PortfolioModule } from './portfolio/portfolio.module.js';
import { GlobalExceptionFilter } from './filters/global-exception/filter.js';
import { UserModule } from './user/user.module';

@Module({
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
  imports: [
    LoggerModule,
    PrismaModule,
    PortfolioModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
  ],
})
export class AppModule {}
