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
            return response.json(headerData);
        } catch (error) {
            next(error);
        }
    }

    public async getFirstBlockContent(request: Request, response: Response, next: NextFunction) {
        try {
            const images = await this.service.getFirstBlockContent();
            return response.json(images);
        } catch (error) {
            next(error);
        }
    }

    public async getSecondBlockContent(request: Request, response: Response, next: NextFunction) {
        try {
            const images = await this.service.getSecondBlockContent();
            return response.json(images);
        } catch (error) {
            next(error);
        }
    }

    public async getHorizontalMenuContent(request: Request, response: Response, next: NextFunction) {
        try {
            const horizontalMenuContent = await this.service.getHorizontalMenuContent();
            return response.json(horizontalMenuContent);
        } catch (error) {
            next(error);
        }
    }
}
