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
        const logo = logoContentData[0].image;
        const menu = await this.gramarketDbRepository.getMenu();
        const salesLogo = await this.gramarketDbRepository.getSalesLogo();
        return { logo: logo, menu: menu, salesLogo: salesLogo };
    }

    public async getBlockContent(blockName: string, area: string, id: number | null) {

        const content = await this.gramarketDbRepository.getContent(blockName, area, id, undefined, 'asc');
        return content;

        switch (blockName) {
            case 'second_block':
                return { content: await this.gramarketDbRepository.getSecondBlockContent() };
            default:
                return {};
        }
    }
}
