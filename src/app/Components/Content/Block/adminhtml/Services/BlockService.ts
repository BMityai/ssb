import Helper from "sosise-core/build/Helper/Helper";
import GramarketDbRepositoryInterface from "../Repositories/GramarketDbRepositoryInterface";
import PrimevueTableParamsConverterUnifier from "../Unifiers/PrimevueTableParamsConverterUnifier";
import { result } from "lodash";
import GetBlockOptionsType from "../Types/GetBlockOptionsType";

export default class AdminhtmlService {
    protected gramarketDbRepository: GramarketDbRepositoryInterface

    /**
     * Constructor
     */
    constructor(repository: GramarketDbRepositoryInterface) {
        this.gramarketDbRepository = repository;
    }

    public async getContentBlocks(filterParams: PrimevueTableParamsConverterUnifier) {
        const promise = new Array();
        promise.push(this.gramarketDbRepository.getBlocks(filterParams));
        promise.push(this.gramarketDbRepository.getBlocks(filterParams, true));
        const promiseResult = await Promise.allSettled(promise) as any;
        
        return {blocks: promiseResult[0].value, totalBlocks: promiseResult[1].value};
    }

    /**
     * Get block by id
     */
    public async getBlockById(blockId: string) {
        return await this.gramarketDbRepository.getBlockById(blockId);
    }

    /**
     * Delete block by id
     */
    public async deleteBlockById(blockId: string) {
         
        // Get images for delete
        const images = await this.gramarketDbRepository.getImagesForDelete(blockId);
        
        const promise = new Array();
        promise.push(this.gramarketDbRepository.deleteBlockById(blockId));
        promise.push(this.gramarketDbRepository.deleteItemsByBlockId(blockId));
        
        Promise.all(promise);


        // + удалить файлы
    }

    /**
     * Get block options
     */
    public async getBlockOptions(): Promise <GetBlockOptionsType> {
        const result = {
            blockOptions: await this.gramarketDbRepository.getBlockDictOptions(),
            pageTypeOptions: await this.gramarketDbRepository.getPageTypeOptions(),
            positionOptions: await this.gramarketDbRepository.getContentBlockPositionDictOptions()
        }


        console.log(result.positionOptions)

        return result;
    }


}
