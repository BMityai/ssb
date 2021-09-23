import GramarketDbRepositoryInterface from "../Repositories/GramarketDbRepositoryInterface";
import PrimevueTableParamsConverterUnifier from "../Unifiers/PrimevueTableParamsConverterUnifier";
import GetBlockOptionsType from "../Types/GetBlockOptionsType";
import GetContentBlocksType from "../Types/GetContentBlocksType";
import GetContentBlockByIdType from "../Types/GetContentBlockByIdType";

export default class AdminhtmlService {
    protected gramarketDbRepository: GramarketDbRepositoryInterface

    /**
     * Constructor
     */
    constructor(repository: GramarketDbRepositoryInterface) {
        this.gramarketDbRepository = repository;
    }

    /**
     * Get content blocks for listing 
     */
    public async getContentBlocks(filterParams: PrimevueTableParamsConverterUnifier): Promise<GetContentBlocksType> {
        // Init promises
        const getBlocksPromises = new Array();

        getBlocksPromises.push(this.gramarketDbRepository.getBlocks(filterParams));
        getBlocksPromises.push(this.gramarketDbRepository.getBlocks(filterParams, true));
        const promiseResult = await Promise.allSettled(getBlocksPromises) as any;

        return { blocks: promiseResult[0].value, totalBlocks: promiseResult[1].value.length };
    }

    /**
     * Get block by id
     */
    public async getBlockById(blockId: string): Promise<GetContentBlockByIdType> {
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
    public async getBlockOptions(): Promise<GetBlockOptionsType> {
        const result = {
            blockOptions: await this.gramarketDbRepository.getBlockDictOptions(),
            pageTypeOptions: await this.gramarketDbRepository.getPageTypeOptions(),
            positionOptions: await this.gramarketDbRepository.getContentBlockPositionDictOptions(),
            attributeSetOptions: await this.gramarketDbRepository.getAttributeSetOptions()
        }
        console.log(result)
        return result;
    }
}
