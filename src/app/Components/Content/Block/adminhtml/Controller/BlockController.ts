import { Request, Response, NextFunction } from 'express';
import Helper from 'sosise-core/build/Helper/Helper';
import IOC from 'sosise-core/build/ServiceProviders/IOC';
import BlockService from '../Services/BlockService';
import PrimevueTableParamsConverterUnifier from '../Unifiers/PrimevueTableParamsConverterUnifier';


export default class BlockController {

    service: BlockService;

    constructor() {
        this.service = IOC.make('ContentBlockAdminHtmlService');
    }

    public async getContentBlocks(request: Request, response: Response, next: NextFunction) {
        try {
            const filterParams = new PrimevueTableParamsConverterUnifier(request.query)
            const result = await this.service.getContentBlocks(filterParams);
            return response.send(result);
        } catch (error) {
            next(error);
        }
    }

    public async getBlockById(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this.service.getBlockById(request.params.blockId);
            return response.send(result);
        } catch (error) {
            next(error);
        }
    }

    public async getBlockOptions(request: Request, response: Response, next: NextFunction) {
        try {
            const result = await this.service.getBlockOptions();
            return response.send(result);
        } catch (error) {
            next(error);
        }
    }

}
