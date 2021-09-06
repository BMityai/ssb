import { Request, Response, NextFunction } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import IOC from 'sosise-core/build/ServiceProviders/IOC';
import FrontendService from '../../Services/FrontendService';
import lodash from 'lodash'
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
            const headerData = await this.service.getHeaderData();
            return response.json(headerData);
        } catch (error) {
            next(error);
        }
    }

    public async getBlockContent(request: Request, response: Response, next: NextFunction) {
        const areaId = lodash.get(request.query, 'id', null);
        const pageType = lodash.get(request.query, 'pageType', 'home_page'); // default "home_page"

        const content = await this.service.getBlockContent(request.params.blockName, pageType as string, areaId as number | null);
        return response.json(content);
    }

}
