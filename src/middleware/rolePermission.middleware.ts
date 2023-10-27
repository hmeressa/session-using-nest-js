import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolePermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();
    if (request?.body) {
      console.log('role', roles);
      const permission = request.body.role.permission;
      if (permission[roles[0]]) {
        return true;
      }
    }
    return false;
  }
}
