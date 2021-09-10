import express, { request } from 'express';
import { Request, Response, NextFunction } from 'express';
import AdminhtmlController from '../app/Http/Controllers/AdminhtmlController';
import bodyParser from 'body-parser';
const router = express.Router();
import AdminAuthMiddleware from '../app/Http/Middlewares/AdminAuthMiddleware';


import ContentBlockRoute from '../app/Components/Content/Block/adminhtml/Routes/api'


const version = 'v1';

// AdminhtmlController
const adminhtmlController = new AdminhtmlController();

// Instantiate adminAuthMiddleware middleware
const adminAuthMiddleware = new AdminAuthMiddleware();


// Login
router.post(`/api/frontend/${version}/admin/auth`, (request: Request, response: Response, next: NextFunction) => {
    adminhtmlController.auth(request, response, next);
});

// Get user by jwt
router.get(`/api/frontend/${version}/admin/user`, (request: Request, response: Response, next: NextFunction) => {
    adminhtmlController.getUserByJwt(request, response, next);
});


// Dashboard -> Content -> Block
router.use(ContentBlockRoute)

export default router;
