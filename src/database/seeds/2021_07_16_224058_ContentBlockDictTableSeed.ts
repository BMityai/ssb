import BaseSchema from 'sosise-core/build/Database/BaseSchema';
import * as faker from 'faker';

/**
 * If you need more information, see: http://knexjs.org/#Schema ; https://www.npmjs.com/package/faker
 */
export default class ContentBlockTableSeed extends BaseSchema {
    /**
     * Restrict running the seed only in a local environment (APP_ENV=local)
     */
    protected onlyInLocalEnvironment = false;

    /**
     * Table name where data should be inserted in
     */
    protected tableName = 'content_block_dict';

    /**
     * Run seed
     */
    public async run(): Promise<void> {
        // Prepare data to seed
        const data: any = [
            { name: 'first_block', created_at: new Date(), updated_at: new Date() },
            { name: 'second_block', created_at: new Date(), updated_at: new Date() },
            { name: 'third_block', created_at: new Date(), updated_at: new Date() },
            { name: 'fourth_block', created_at: new Date(), updated_at: new Date() },
            { name: 'fifth_block', created_at: new Date(), updated_at: new Date() },
            { name: 'horizontal_menu', created_at: new Date(), updated_at: new Date() },
            { name: 'logo', created_at: new Date(), updated_at: new Date() },
            { name: 'sales_logo', created_at: new Date(), updated_at: new Date() },
        ];

        // Insert to table
        await this.dbConnection.table(this.tableName).insert(data);
    }
}
