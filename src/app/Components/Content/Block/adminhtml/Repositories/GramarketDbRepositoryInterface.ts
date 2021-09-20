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
     * Delete block by id
     */
    deleteBlockById(blockId: string): Promise<void>;

    /**
     * Delete block items block by id
     */
    deleteItemsByBlockId(blockId: string): Promise<void>;

    /**
     * Get images for delete
     */
    getImagesForDelete(blockId: string): Promise<string[]>;

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
    getContentBlockPositionDictOptions();

    getAttributeSetOptions();

}
