import {
  IsString,
  IsBoolean,
  IsEnum,
  IsArray,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { EventType } from '../../../generated/prisma/enums.js';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  location: string;

  @IsString()
  shortSummary: string;

  @IsString()
  fullDescription: string;

  @IsString()
  coverImageUrl: string;

  @IsArray()
  @IsString({ each: true })
  galleryImages: string[];

  @IsEnum(EventType)
  eventType: EventType;

  @IsOptional()
  @IsString()
  reviewText?: string;

  @IsBoolean()
  isFeatured: boolean;

  @IsDateString()
  date: string;
}
