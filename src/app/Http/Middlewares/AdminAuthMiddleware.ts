import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import Helper from 'sosise-core/build/Helper/Helper';
import authConfig from "../../../config/auth";


export default class AdminAuthMiddleware {
    /**
     * This method handles the middleware
     */
    public async handle(request: Request, response: Response, next: NextFunction): Promise<any> {
        if(request.headers.token) {
            try {
                jwt.verify(request.headers.token as string, authConfig.secret) as {id: string};
                next()
            } catch(e) {
                return response.sendStatus(401)
            }

        } else {
            return response.sendStatus(401)
        }
    }
}
