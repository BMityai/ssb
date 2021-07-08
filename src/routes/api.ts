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

// FrontendController
const frontendController = new FrontendController();

// Get header data (logo, menu categories, sales logo)
router.get(`/api/frontend/${version}/header`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getHeader(request, response, next);
    next();
});

// Get first block data (images - full width banners)
router.get(`/api/frontend/${version}/home_page/content/first_block`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getFirstBlockContent(request, response, next);
    next();
});

// Get first block data (images - full width banners)
router.get(`/api/frontend/${version}/home_page/content/second_block`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getSecondBlockContent(request, response, next);
    next();
});

// Get horizontal menu content (html format) under header
router.get(`/api/frontend/${version}/home_page/content/horizontal_menu`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getHorizontalMenuContent(request, response, next);
    next();
});






export default router;
