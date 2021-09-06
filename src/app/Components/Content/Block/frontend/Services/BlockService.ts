import Helper from "sosise-core/build/Helper/Helper";
import GramarketDbRepositoryInterface from "../Repositories/GramarketDbRepositoryInterface";
import { result } from "lodash";

export default class AdminhtmlService {
    protected gramarketDbRepository: GramarketDbRepositoryInterface

    /**
     * Constructor
     */
    constructor(repository: GramarketDbRepositoryInterface) {
        this.gramarketDbRepository = repository;
    }

    public async getContentBlockByPageType(pageType: string) {

        return this.gramarketDbRepository.getContentBlockByPageType(pageType);
    }

}
