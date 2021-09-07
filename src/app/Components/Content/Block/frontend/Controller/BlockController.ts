import { Request, Response, NextFunction } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import IOC from 'sosise-core/build/ServiceProviders/IOC';
import BlockService from '../Services/BlockService';


export default class BlockController {

    service: BlockService;

    constructor() {
        this.service = IOC.make('ContentBlockFrontendService');
    }

    /**
     * Get content block by page type
     */
    public async getContentBlockByPageType(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this.service.getContentBlockByPageType(request.params.pageType);
            console.log(result)
            return response.send(result);
        } catch (error) {
            next(error);
        }
    }

}
