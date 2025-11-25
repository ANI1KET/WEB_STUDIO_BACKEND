import { EventType } from '../../../generated/prisma/enums.js';

export class EventResponse {
  id: string;
  slug: string;
  title: string;
  location: string;
  isFeatured: boolean;
  shortSummary: string;
  coverImageUrl: string;
  fullDescription: string;
  galleryImages: string[];
  reviewText?: string | null;

  //   ENUM
  eventType: EventType;

  // DATETIME
  date: Date;
  createdAt: Date;
}
