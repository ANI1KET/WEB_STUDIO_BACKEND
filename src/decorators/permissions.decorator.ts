import { SetMetadata } from '@nestjs/common';

import { Permission } from 'src/types/types.js';

export const PERMISSION_KEY = 'Permission';

export const Permission_ = (permission: Permission) =>
  SetMetadata(PERMISSION_KEY, permission);
