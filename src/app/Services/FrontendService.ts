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
        console.log(789)
        return {logo: logo, menu: menu, salesLogo: salesLogo};
    }

    /**
     * Get fulfilled result
     */
    protected getOnlyFulfilledPromiseResult(promisesData: PromiseSettledResult<any>[]): any[] {
        const fulfilledData = new Array();
        for(const data of promisesData) {
            if(data.status === 'fulfilled') {
                fulfilledData.push(data.value);
            } else {
                this.logger.error(data.reason);
            }

        }
        return fulfilledData;
    }
}
