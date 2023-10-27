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
      const permissions = request.body.role.permission;
      console.log('permission routes for canActive', roles);
      console.log(
        'permission routes for canActive',
        permissions.PermissionModel,
      );
      if (permissions[roles[0]][roles[1]]) {
        return true;
      }
    }
    return false;
  }
}
