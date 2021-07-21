import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CreatePageTypeDictTable extends BaseSchema {

    protected tableName = 'page_type_dict';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('value');
            table.timestamps(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public async down(): Promise<void> {
        await this.dbConnection.schema.dropTable(this.tableName);
    }
}
