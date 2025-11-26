import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Controller,
} from '@nestjs/common';

import { Role } from '../types/types.js';
import { Roles } from '../decorators/roles.decorator.js';
import { PortfolioService } from './portfolio.service.js';
import { EventResponse } from './entities/portfolio.entity.js';
import { CreateEventDto } from './dtos/create-portfolio.dto.js';
import { UpdateEventDto } from './dtos/update-portfolio.dto.js';
import { RolesGuard } from '../guards/authorize/role/roles.guard.js';
import { AuthenticateGuard } from '../guards/authenticate/authenticate.guard.js';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  findAll(): Promise<EventResponse[]> {
    return this.portfolioService.findAll();
  }

  @Delete(':id')
  @UseGuards(AuthenticateGuard, RolesGuard)
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string): Promise<EventResponse> {
    return this.portfolioService.remove(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticateGuard, RolesGuard)
  @Roles(Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updatePortfolioDto: UpdateEventDto,
  ): Promise<EventResponse> {
    return this.portfolioService.update(id, updatePortfolioDto);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string): Promise<EventResponse | null> {
    return this.portfolioService.findOne(slug);
  }

  @Post()
  @UseGuards(AuthenticateGuard, RolesGuard)
  @Roles(Role.ADMIN)
  create(@Body() createPortfolioDto: CreateEventDto): Promise<EventResponse> {
    return this.portfolioService.create(createPortfolioDto);
  }
}
