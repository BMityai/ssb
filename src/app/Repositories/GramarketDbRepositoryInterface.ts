import AllCategoriesType from "../Types/AllCategoriesType";
import GetContentBlocksType from "../Components/Content/Block/adminhtml/Types/GetContentBlocksType";
import PrimevueTableParamsConverterUnifier from "../Components/Content/Block/adminhtml/Unifiers/PrimevueTableParamsConverterUnifier";

export default interface GramarketDbRepositoryInterface {
    /**
     * Get all categories
     */
     getAllCategories(): Promise<AllCategoriesType>;

    /**
     * Get block content
     */
    getContent(contentName: string, pageType: string, districtId?: number, sort?: string): Promise<any>;

    getAdminUser(login: string);
    
    getUserById(id: string);

}
