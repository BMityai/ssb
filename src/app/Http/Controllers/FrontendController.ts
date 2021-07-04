import { Request, Response, NextFunction } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import IOC from 'sosise-core/build/ServiceProviders/IOC';
import HttpResponse from 'sosise-core/build/Types/HttpResponse';
import FrontendService from '../../Services/FrontendService';
export default class FrontendController {

    service: FrontendService;

    constructor() {
        this.service = IOC.make('FrontendService');
    }
    
    /**
     * Get header
     */
    public async getHeader(request: Request, response: Response, next: NextFunction) {

        try {
            const headerData = await this.service.getHeaderData()
            return response.send(headerData);
        } catch (error) {
            next(error);
        }
    }
}
