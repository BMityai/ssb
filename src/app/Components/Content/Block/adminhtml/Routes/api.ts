import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../Controller/BlockController';
const router = express.Router();
import AdminAuthMiddleware from '../../../../../Http/Middlewares/AdminAuthMiddleware';
import routesConfig from '../../../../../../config/routes';
import Helper from 'sosise-core/build/Helper/Helper';

const version = routesConfig.frontend.apiVersion;

// AdminhtmlController
const controller = new Controller();

// Instantiate adminAuthMiddleware middleware
const adminAuthMiddleware = new AdminAuthMiddleware();

// Get content blocks
router.get(`/api/frontend/${version}/admin/content/blocks`, adminAuthMiddleware.handle, (request: Request, response: Response, next: NextFunction) => {
    controller.getContentBlocks(request, response, next);
});

// Get content block by id
router.get(`/api/frontend/${version}/admin/content/block/:blockId`, adminAuthMiddleware.handle, (request: Request, response: Response, next: NextFunction) => {
    controller.getBlockById(request, response, next);
});

// Delete block by id
router.delete(`/api/frontend/${version}/admin/content/block/:blockId`, adminAuthMiddleware.handle, (request: Request, response: Response, next: NextFunction) => {
    controller.deleteBlockById(request, response, next);
});

// Get content block options
router.get(`/api/frontend/${version}/admin/content/block_dict/options`, adminAuthMiddleware.handle, (request: Request, response: Response, next: NextFunction) => {
    controller.getBlockOptions(request, response, next);
});


export default router;
