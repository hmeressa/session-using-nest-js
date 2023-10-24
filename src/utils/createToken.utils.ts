import * as jwt from 'jsonwebtoken'

export const createToken = (userId:string) => {
     return jwt.sign( userId, "12345678910")
    
}
