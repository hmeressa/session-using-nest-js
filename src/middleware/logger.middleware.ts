import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class loggerMiddlewareWithClass implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Class-Based Middleware');
    next();
  }
}

export function loggerMiddlewareWithFunction(req: any, res: any, next : any){
    console.log('Function-Based Middleware');
    next();
  }