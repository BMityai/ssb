export default interface GramarketDbRepositoryInterface {
    /**
     * Get menu items
     */
    getMenu(): Promise<any>

    /**
     * Get menu items
     */
    getContent(contentName: string, area: string, entityId?: number | null, districtId?: number, sort?: string): Promise<any>

    /**
     * Get menu items
     */
    getSalesLogo(): Promise<any>

    /**
     * Get second block images
     */
    getSecondBlockContent(): Promise<any>
}
