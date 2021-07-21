import BaseSchema from 'sosise-core/build/Database/BaseSchema';
import * as faker from 'faker';

/**
 * If you need more information, see: http://knexjs.org/#Schema ; https://www.npmjs.com/package/faker
 */
export default class BlockPageTypeDictTableSeed extends BaseSchema {
    /**
     * Restrict running the seed only in a local environment (APP_ENV=local)
     */
    protected onlyInLocalEnvironment = false;

    /**
     * Table name where data should be inserted in
     */
    protected tableName = 'page_type_dict';

    /**
     * Run seed
     */
    public async run(): Promise<void> {
        // Prepare data to seed
        const data: any = [
            { value: 'layout', created_at: new Date(), updated_at: new Date() },
            { value: 'home_page', created_at: new Date(), updated_at: new Date() },
            { value: 'product_page', created_at: new Date(), updated_at: new Date() },
            { value: 'category_page', created_at: new Date(), updated_at: new Date() },
            { value: 'custom_page', created_at: new Date(), updated_at: new Date() }
        ];

        // Insert to table
        await this.dbConnection.table(this.tableName).insert(data);
    }
}
