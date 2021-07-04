import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';

export default class GramarketDbRepository implements GramarketDbRepositoryInterface {
    /**
     * Get menu items
     */
    public async getMenu(): Promise<any>
    {
        return 42;
    }

    /**
     * Get menu items
     */
    public async getLogo(): Promise<any>
    {
        return 'https://via.placeholder.com/150x50';
    }

    /**
     * Get menu items
     */
    public async getSalesLogo(): Promise<any>
    {
        return 'https://via.placeholder.com/150x50';
    }
}
