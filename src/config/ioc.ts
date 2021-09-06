import GramarketDbRepository from "../app/Repositories/GramarketDbRepository";
import AdminhtmlService from "../app/Services/AdminhtmlService";
import FrontendService from "../app/Services/FrontendService";

import ContentBlockAdminHtmlService from "../app/Components/Content/Block/adminhtml/Services/BlockService"
import ContentBlockAdminHtmlGramarketDbRepository from "../app/Components/Content/Block/adminhtml/Repositories/GramarketDbRepository"

import ContentBlockFrontendService from "../app/Components/Content/Block/frontend/Services/BlockService"
import ContentBlockFrontendGramarketDbRepository from "../app/Components/Content/Block/frontend/Repositories/GramarketDbRepository"

/**
 * IOC Config, please register here your services
 */
const iocConfig = {
    /**
     * Singleton services
     *
     * How to register:
     * YourServiceName: () => new YourServiceName()
     *
     * How to use:
     * const logger = IOC.makeSingleton(LoggerService) as LoggerService;
     */
    singletons: {
    },

    /**
     * Non singleton services
     *
     * How to register:
     * YourServiceName: () => new YourServiceName()
     *
     * How to use:
     * const logger = IOC.make(LoggerService) as LoggerService;
     */
    nonSingletons: {
        /**
         * This service is included in the core out of the box
         * If you want to override LoggerService just uncomment this code and import all necessary modules
         */
        // LoggerService: () => {
        //     if (process.env.APP_ENV === 'local') {
        //         return new LoggerService(new LoggerPrettyConsoleRepository());
        //     }
        //     return new LoggerService(new LoggerJsonConsoleRepository());
        // }
        FrontendService: () => {
            return new FrontendService(new GramarketDbRepository());
        },
        AdminhtmlService: () => {
            return new AdminhtmlService(new GramarketDbRepository());
        },

        // Content block admin
        ContentBlockAdminHtmlService: () => {
            return new ContentBlockAdminHtmlService(new ContentBlockAdminHtmlGramarketDbRepository)
        },
        // Content block frontend
        ContentBlockFrontendService: () => {
            return new ContentBlockFrontendService(new ContentBlockFrontendGramarketDbRepository)
        }



    }
};

export default iocConfig;
