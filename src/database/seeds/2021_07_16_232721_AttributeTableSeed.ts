import BaseSchema from 'sosise-core/build/Database/BaseSchema';
import * as faker from 'faker';

/**
 * If you need more information, see: http://knexjs.org/#Schema ; https://www.npmjs.com/package/faker
 */
export default class AttributeTableSeed extends BaseSchema {
    /**
     * Restrict running the seed only in a local environment (APP_ENV=local)
     */
    protected onlyInLocalEnvironment = false;

    /**
     * Table name where data should be inserted in
     */
    protected tableName = 'attribute';

    /**
     * Run seed
     */
    public async run(): Promise<void> {
        // Prepare data to seed
        const data: any = [
            { code: 'name', type_id: 2, frontend_input: 'input', frontend_label: 'Name', is_required: true, is_unique: true, table: 'catalog_category_varchar', created_at: new Date(), updated_at: new Date() },
            { code: 'url', type_id: 2, frontend_input: 'input', frontend_label: 'Url', is_required: true, is_unique: true, table: 'catalog_category_varchar', created_at: new Date(), updated_at: new Date() },
            { code: 'thumbnail', type_id: 2, frontend_input: 'input', frontend_label: 'Thumbnail', is_required: false, is_unique: true, table: 'catalog_category_varchar', created_at: new Date(), updated_at: new Date() },
            { code: 'name', type_id: 3, frontend_input: 'input', frontend_label: 'Name', is_required: true, is_unique: true, table: 'catalog_product_varchar', created_at: new Date(), updated_at: new Date() },
            { code: 'url', type_id: 3, frontend_input: 'input', frontend_label: 'Url', is_required: true, is_unique: true, table: 'catalog_product_varchar', created_at: new Date(), updated_at: new Date() },
        ];

        // Insert to table
        await this.dbConnection.table(this.tableName).insert(data);
    }
}
