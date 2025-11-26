import { Injectable } from '@nestjs/common';

import { EventResponse } from './entities/portfolio.entity.js';
import { CreateEventDto } from './dtos/create-portfolio.dto.js';
import { UpdateEventDto } from './dtos/update-portfolio.dto.js';
import { PortfolioRepository } from './repositories/portfolio.repository.js';

@Injectable()
export class PortfolioService {
  constructor(private portfolioRepository: PortfolioRepository) {}

  findAll(): Promise<EventResponse[]> {
    return this.portfolioRepository.findAll();
  }

  remove(id: string): Promise<EventResponse> {
    return this.portfolioRepository.remove(id);
  }

  findOne(slug: string): Promise<EventResponse | null> {
    return this.portfolioRepository.findById(slug);
  }

  create(createEventDto: CreateEventDto): Promise<EventResponse> {
    return this.portfolioRepository.create(createEventDto);
  }

  update(id: string, updateEventDto: UpdateEventDto): Promise<EventResponse> {
    return this.portfolioRepository.update(id, updateEventDto);
  }
}
