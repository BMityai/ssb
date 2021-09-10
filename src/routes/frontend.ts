import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import FrontendController from '../app/Http/Controllers/FrontendController';
import bodyParser from 'body-parser';
const router = express.Router();


import ContentBlockRoute from '../app/Components/Content/Block/frontend/Routes/api'


const version = 'v1';

// FrontendController
const frontendController = new FrontendController();

// Get header data (logo, menu categories, sales logo)
router.get(`/api/frontend/${version}/header`, (request: Request, response: Response, next: NextFunction) => {
    frontendController.getHeader(request, response, next);
});

// // Get block content by name 
// router.get(`/api/frontend/${version}/content/block/:blockName`, (request: Request, response: Response, next: NextFunction) => {
//     frontendController.getBlockContent(request, response, next);
// });

// Content -> blocks
router.use(ContentBlockRoute)


export default router;
