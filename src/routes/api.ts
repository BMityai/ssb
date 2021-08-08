import express, { NextFunction, Request, Response } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import FrontendController from '../app/Http/Controllers/FrontendController';
import frontendRouter from './frontend'


const router = express.Router();

/**
 * Frontend router
 */
router.use(frontendRouter)


export default router;
