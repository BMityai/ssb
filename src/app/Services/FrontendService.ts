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
        const logo = await this.gramarketDbRepository.getLogo();
        const menu = await this.gramarketDbRepository.getMenu();
        const salesLogo = await this.gramarketDbRepository.getSalesLogo();
        return {logo: logo, menu: menu, salesLogo: salesLogo};
    }

    public async getFirstBlockContent() {
        return await this.gramarketDbRepository.getFirstBlockContent();
    }

    public async getSecondBlockContent() {
        return {content: await this.gramarketDbRepository.getSecondBlockContent()};
    }

    public async getHorizontalMenuContent() {
        return {content: await this.gramarketDbRepository.getHorizontalMenuContent()};
    }
}
