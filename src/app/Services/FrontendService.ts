import { isSet } from "lodash";
import Helper from "sosise-core/build/Helper/Helper";
import IOC from "sosise-core/build/ServiceProviders/IOC";
import LoggerService from "sosise-core/build/Services/Logger/LoggerService";
import GramarketDbRepositoryInterface from "../Repositories/GramarketDbRepositoryInterface";

export default class FrontendService {
    protected gramarketDbRepository: GramarketDbRepositoryInterface
    protected logger: LoggerService

    /**
     * Constructor
     */
    constructor(repository: GramarketDbRepositoryInterface) {
        this.gramarketDbRepository = repository;
        this.logger = IOC.make('LoggerService');
    }

    /**
     * Get header data
     */
    public async getHeaderData(): Promise<any> {
        const logoContentData = await this.gramarketDbRepository.getContent('logo', 'layout');
        const logo = logoContentData[0];
        const menu = await this.getMenu();
        const salesLogoContentData = await this.gramarketDbRepository.getContent('sales_logo', 'layout');
        const salesLogo = salesLogoContentData[0];
        return { logo: logo, menu: menu, salesLogo: salesLogo };
    }

    /**
     * Get data for blocks
     */ 
    public async getBlockContent(blockName: string, pageType: string, id: number | null) {
        const content = await this.gramarketDbRepository.getContent(blockName, pageType, id, undefined, 'asc');
        return content;
    }

    /**
     * Get categories tree for burger menu
     */
    private async getMenu() {
        const categories = await this.gramarketDbRepository.getAllCategories();
        return categories.getTree();
    }
}
