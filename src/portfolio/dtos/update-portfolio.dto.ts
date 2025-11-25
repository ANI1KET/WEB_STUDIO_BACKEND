import { PartialType } from '@nestjs/mapped-types';

import { CreateEventDto } from './create-portfolio.dto.js';

export class UpdateEventDto extends PartialType(CreateEventDto) {}
