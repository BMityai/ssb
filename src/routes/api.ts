import express from 'express';
import { Request, Response, NextFunction } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import FrontendController from '../app/Http/Controllers/FrontendController';
import cors from 'cors';
const router = express.Router();

const corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200 
}
router.use(cors(corsOptions))

const version = 'v1';

// IndexController
const frontendController = new FrontendController();
router.get(`/api/frontend/${version}/header`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getHeader(request, response, next);
    next();
});




export default router;
