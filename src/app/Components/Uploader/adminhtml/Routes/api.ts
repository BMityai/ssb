import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../Controller/UploaderController';
const router = express.Router();
import AdminAuthMiddleware from '../../../../Http/Middlewares/AdminAuthMiddleware';
import routesConfig from '../../../../../config/routes';



const version = routesConfig.frontend.apiVersion;

// AdminhtmlController
const controller = new Controller();


// Instantiate adminAuthMiddleware middleware
const adminAuthMiddleware = new AdminAuthMiddleware();

// Get content blocks
router.post(`/api/frontend/${version}/admin/upload`, (request: Request, response: Response, next: NextFunction) => {
    const  image  = request.body;
    console.log(request.files)
    response.json({ file: request.files })
    // controller.saveFileToTmpFolder(request, response, next);
    // response.sendStatus(200)
});


export default router;
