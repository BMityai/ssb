import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../Controller/BlockController';
const router = express.Router();
import AdminAuthMiddleware from '../../../../../Http/Middlewares/AdminAuthMiddleware';
import routesConfig from '../../../../../../config/routes';

const version = routesConfig.frontend.apiVersion;

// BlockController
const controller = new Controller();


// Get block content by page type 
router.get(`/api/frontend/${version}/content/block/:pageType`, (request: Request, response: Response, next: NextFunction) => {
    controller.getContentBlockByPageType(request, response, next);
});


export default router;
