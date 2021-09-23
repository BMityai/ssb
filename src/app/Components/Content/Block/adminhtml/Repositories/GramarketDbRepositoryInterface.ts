import GetContentBlockByIdType from "../Types/GetContentBlockByIdType";
import PrimevueTableParamsConverterUnifier from "../Unifiers/PrimevueTableParamsConverterUnifier";
import GetContentBlockOptionsType from '../Types/GetContentBlockOptionsType';
import ContentBlockForListingType from "../Types/ContentBlockForListingType";
import AttributeSetType from "../../../AttributeSet/Types/AttributeSetType";
import GetContentBlockPositionDictOptionsType from "../Types/GetContentBlockPositionDictOptionsType";

export default interface GramarketDbRepositoryInterface {

    /**
     * Get all content blocks for admin panel list
     */
    getBlocks(filterParams: PrimevueTableParamsConverterUnifier, applyPaginate?: boolean): Promise<ContentBlockForListingType[]>;

    /**
     * Get content block by id
     */
    getBlockById(blockId: string): Promise<GetContentBlockByIdType>;

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
    getContentBlockPositionDictOptions(): Promise<GetContentBlockPositionDictOptionsType[]>;

    /**
     * Get attribute set options
     */
    getAttributeSetOptions(): Promise<AttributeSetType[]>;
}
