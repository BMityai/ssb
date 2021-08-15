import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import FrontendController from '../app/Http/Controllers/FrontendController';
import cors from 'cors';
import bodyParser from 'body-parser';
const router = express.Router();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

router.use(cors(corsOptions))
router.use(bodyParser.json())

const version = 'v1';

// FrontendController
const frontendController = new FrontendController();

// Get header data (logo, menu categories, sales logo)
router.get(`/api/frontend/${version}/header`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getHeader(request, response, next);
});

// Get block content by name 
router.get(`/api/frontend/${version}/home_page/content/:blockName`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getBlockContent(request, response, next);
});


export default router;
