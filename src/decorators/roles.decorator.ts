import { SetMetadata } from '@nestjs/common';

import { Role } from 'src/types/types.js';

export const ROLES_KEY = 'Roles';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
