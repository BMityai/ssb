import { Request, Response, NextFunction } from 'express';
import UploaderService from '../Services/UploaderService';

export default class BlockController {

    service: UploaderService;

    constructor() {
        this.service = new UploaderService();
    }

    public saveFileToTmpFolder(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        // try {
        //     const path = this.service.saveFileToTmpFolder(request);
        //     return response.send(path);
        // } catch (error) {
        //     next(error);
        // }
    }

}
