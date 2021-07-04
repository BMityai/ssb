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
}
