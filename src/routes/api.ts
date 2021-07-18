import express, { NextFunction, Request, Response } from 'express';
import FrontendController from '../app/Http/Controllers/FrontendController';
import frontendRouter from './frontend'


const router = express.Router();

/**
 * Frontend router
 */
router.use(frontendRouter)



export default router;
