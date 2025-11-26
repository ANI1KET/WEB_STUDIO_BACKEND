import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service.js';
import { EventResponse } from '../entities/portfolio.entity.js';
import { UpdateEventDto } from '../dtos/update-portfolio.dto.js';
import { CreateEventDto } from '../dtos/create-portfolio.dto.js';

@Injectable()
export class PortfolioRepository {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<EventResponse[]> {
    return this.prisma.event.findMany();
  }

  remove(id: string): Promise<EventResponse> {
    return this.prisma.event.delete({ where: { id } });
  }

  create(data: CreateEventDto): Promise<EventResponse> {
    return this.prisma.event.create({ data });
  }

  findById(slug: string): Promise<EventResponse | null> {
    return this.prisma.event.findUnique({ where: { slug } });
  }

  update(id: string, data: UpdateEventDto): Promise<EventResponse> {
    return this.prisma.event.update({ where: { id }, data });
  }
}
