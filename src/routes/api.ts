import express, { NextFunction, Request, Response } from 'express';
import frontendRouter from './frontend'
import adminhtmlRouter from './adminhtml'
import cors from 'cors';


const router = express.Router();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

router.use(express.json({limit: '10mb'}))
router.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 50000 }))



router.use(cors(corsOptions));

/**
 * Frontend router
 */
router.use(frontendRouter)

/**
 * Adminhtml router
 */
router.use(adminhtmlRouter)


export default router;
