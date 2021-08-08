import AllCategoriesType from "../Types/AllCategoriesType";

export default interface GramarketDbRepositoryInterface {
    /**
     * Get all categories
     */
     getAllCategories(): Promise<AllCategoriesType>

    /**
     * Get block content
     */
    getContent(contentName: string, pageType: string, entityId?: number | null, districtId?: number, sort?: string): Promise<any>
}
