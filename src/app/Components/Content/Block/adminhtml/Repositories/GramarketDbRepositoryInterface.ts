import GetContentBlocksByIdType from "../Types/GetContentBlockByIdType";
import GetContentBlocksType from "../Types/GetContentBlocksType";
import PrimevueTableParamsConverterUnifier from "../Unifiers/PrimevueTableParamsConverterUnifier";
import GetContentBlockOptionsType from '../Types/GetContentBlockOptionsType';
import GetContentBlockPositionDictOptionsType from "../Types/GetContentBlockPositionDictOptionsType";

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
    getBlockDictOptions(): Promise<GetContentBlockOptionsType[]>;

    /**
     * Get page type dict options
     */
    getPageTypeOptions(): Promise<GetContentBlockOptionsType[]>;

    /**
     * Get content block position options
     */
    getContentBlockPositionDictOptions(): Promise<GetContentBlockPositionDictOptionsType[]>;

}
