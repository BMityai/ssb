import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CreateContentTable extends BaseSchema {

    protected tableName = 'content';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('text');
            table.string('url');
            table.string('image');
            table.integer('block_id');
            table.integer('entity_id');
            table.integer('page_type_id').nullable();
            table.integer('district_id').defaultTo('0');
            table.boolean('is_enable').defaultTo(true);
            table.integer('position');
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
