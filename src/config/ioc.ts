import GramarketDbRepository from "../app/Repositories/GramarketDbRepository";
import AdminhtmlService from "../app/Services/AdminhtmlService";
import FrontendService from "../app/Services/FrontendService";

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
        }
    }
};

export default iocConfig;
