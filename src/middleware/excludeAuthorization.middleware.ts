import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class ExcludeAuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log('yyyy', request.excludeAuthorization);
    return request.excludeAuthorization === true;
  }
}
