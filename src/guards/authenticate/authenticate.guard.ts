import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { getToken } from 'next-auth/jwt';

import { User } from 'src/types/types.js';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    try {
      const token = (await getToken({ req })) as User;

      if (!token) {
        throw new UnauthorizedException('Please log in to continue');
      }

      req.user = {
        role: token.role,
        email: token.email,
        number: token.number,
        userId: token.userId,
        permission: token.permission,
      };

      return true;
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException('Unauthorized Access');
    }
  }
}
