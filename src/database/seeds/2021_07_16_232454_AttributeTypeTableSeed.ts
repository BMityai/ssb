import BaseSchema from 'sosise-core/build/Database/BaseSchema';
import * as faker from 'faker';

/**
 * If you need more information, see: http://knexjs.org/#Schema ; https://www.npmjs.com/package/faker
 */
export default class AttributeTypeTableSeed extends BaseSchema {
    /**
     * Restrict running the seed only in a local environment (APP_ENV=local)
     */
    protected onlyInLocalEnvironment = false;

    /**
     * Table name where data should be inserted in
     */
    protected tableName = 'attribute_type';

    /**
     * Run seed
     */
    public async run(): Promise<void> {
        // Prepare data to seed
        const data: any = [
            { code: 'customer', created_at: new Date(), updated_at: new Date() },
            { code: 'category', created_at: new Date(), updated_at: new Date() },
            { code: 'product', created_at: new Date(), updated_at: new Date() },
        ];

        // Insert to table
        await this.dbConnection.table(this.tableName).insert(data);
    }
}
