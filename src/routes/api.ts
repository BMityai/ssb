import express, { NextFunction, Request, Response } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import frontendRouter from './frontend'
import adminhtmlRouter from './adminhtml'
import cors from 'cors';


const router = express.Router();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

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
