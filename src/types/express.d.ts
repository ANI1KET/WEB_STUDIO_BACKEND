import 'express';

import { User } from './types.js';

declare module 'express' {
  export interface Request {
    user?: User;
  }
}
