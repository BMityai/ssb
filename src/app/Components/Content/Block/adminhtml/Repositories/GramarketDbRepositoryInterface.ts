import GetBlockDictOptionsType from "../Types/GetBlockDictOptionsType";
import GetContentBlocksByIdType from "../Types/GetContentBlockByIdType";
import GetContentBlocksType from "../Types/GetContentBlocksType";
import PrimevueTableParamsConverterUnifier from "../Unifiers/PrimevueTableParamsConverterUnifier";

export default interface GramarketDbRepositoryInterface {

    /**
     * Get all content blocks for admin panel list
     */
    getBlocks(filterParams: PrimevueTableParamsConverterUnifier, getCount?: boolean): Promise<GetContentBlocksType[]>;

    /**
     * Get content block by id
     */
    getBlockById(blockId: string): Promise<GetContentBlocksByIdType>;

    /**
     * Get content block options
     */
    getBlockDictOptions(): Promise<GetBlockDictOptionsType[]>;
}
