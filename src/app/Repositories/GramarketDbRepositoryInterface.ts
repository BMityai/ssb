export default interface GramarketDbRepositoryInterface {
    /**
     * Get menu items
     */
    getMenu(): Promise<any>

    /**
     * Get menu items
     */
    getLogo(): Promise<any>

    /**
     * Get menu items
     */
    getSalesLogo(): Promise<any>

    /**
     * Get first block images
     */
    getFirstBlockContent(): Promise<any>

    /**
     * Get second block images
     */
    getSecondBlockContent(): Promise<any>

    getHorizontalMenuContent(): Promise<any>

}
