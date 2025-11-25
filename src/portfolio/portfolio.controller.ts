import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { PortfolioService } from './portfolio.service.js';
import { EventResponse } from './entities/portfolio.entity.js';
import { CreateEventDto } from './dtos/create-portfolio.dto.js';
import { UpdateEventDto } from './dtos/update-portfolio.dto.js';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  findAll(): Promise<EventResponse[]> {
    return this.portfolioService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<EventResponse> {
    return this.portfolioService.remove(id);
  }

  @Patch(':id')
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
  create(@Body() createPortfolioDto: CreateEventDto): Promise<EventResponse> {
    return this.portfolioService.create(createPortfolioDto);
  }
}
