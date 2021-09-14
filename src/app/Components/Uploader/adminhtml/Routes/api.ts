import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../Controller/UploaderController';
const router = express.Router();
import AdminAuthMiddleware from '../../../../Http/Middlewares/AdminAuthMiddleware';
import routesConfig from '../../../../../config/routes';
import multer from 'multer';

const version = routesConfig.frontend.apiVersion;


const storage = multer.diskStorage({
    destination: 'storage/public/tmp',
    filename: function (req, file, callback) {
        const originalNameSplit = file.originalname.split('.')
        const format = originalNameSplit[originalNameSplit.length - 1]
        callback(null, `${Date.now()}.${format}`);
    }
});

const upload = multer({ storage: storage })


// UploaderController
const controller = new Controller();


// Instantiate adminAuthMiddleware middleware
const adminAuthMiddleware = new AdminAuthMiddleware();

// Get content blocks
router.post(`/api/frontend/${version}/admin/upload`, upload.single('file'), (request: Request, response: Response, next: NextFunction) => {
    const image = request.body;
    console.log(request.file);
    response.json({ file: request.file });
    // controller.saveFileToTmpFolder(request, response, next);
    // response.sendStatus(200)
});


export default router;
