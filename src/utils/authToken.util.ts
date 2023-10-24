import { NextFunction } from "express";

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    console.log("usr tokens", req.headers)
    next()
//    token : String;
//   if ( req.headers.Authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
//     // console.log(req.header.authorization.split(" ")[0]);
//     token = req.headers.authorization.split(" ")[1];
//     if (!token) {
//       return next(new AppError("Please Login!", 401));
//     }
//     return token;
//   } else {
//     return next(new AppError("Please Login!", 401));
//   }
};

// export authToken
module.exports = authToken;
