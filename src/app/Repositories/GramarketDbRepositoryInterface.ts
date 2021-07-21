export default interface GramarketDbRepositoryInterface {
    /**
     * Get menu items
     */
    getMenu(): Promise<any>

    /**
     * Get block content
     */
    getContent(contentName: string, pageType: string, entityId?: number | null, districtId?: number, sort?: string): Promise<any>
}
