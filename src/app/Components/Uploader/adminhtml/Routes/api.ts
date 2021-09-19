import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../Controller/UploaderController';
const router = express.Router();
import AdminAuthMiddleware from '../../../../Http/Middlewares/AdminAuthMiddleware';
import routesConfig from '../../../../../config/routes';
import multer from 'multer';
import Helper from 'sosise-core/build/Helper/Helper';
import adminUploaderConfig from '../Config/uploaderConfig';

const version = routesConfig.frontend.apiVersion;


const storage = multer.diskStorage({
    destination: `${adminUploaderConfig.mediaTmpPath}/images`,
    filename: function (req, file, callback) {
        const originalNameSplit = file.originalname.split('.')
        const format = originalNameSplit[originalNameSplit.length - 1]
        callback(null, `${originalNameSplit[0]}-${Date.now()}.${format}`);
    }
});

const upload = multer({ storage: storage })


// UploaderController
const controller = new Controller();


// Instantiate adminAuthMiddleware middleware
const adminAuthMiddleware = new AdminAuthMiddleware();

// Get content blocks
router.post(
    `/api/frontend/${version}/admin/upload`,
    upload.single('file'),
    adminAuthMiddleware.handle,
    (request: Request, response: Response, next: NextFunction) => {

        response.send(`/${request.file?.path}`)
    }
);


export default router;
