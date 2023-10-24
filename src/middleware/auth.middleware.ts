import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { authToken } from 'src/utils/authToken.util';


@Injectable()
export class verifyToken implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
       const token =  req.headers;
        console.log("user token", token)
   
    //   const rr = jwt.verify(token, "12345678910");
    next();
  }
}
