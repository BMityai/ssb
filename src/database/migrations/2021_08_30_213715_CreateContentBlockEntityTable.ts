import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CreateContentTable extends BaseSchema {

    protected tableName = 'content_block_entity';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('title').nullable();
            table.integer('block_id').notNullable();
            table.integer('page_type_id').notNullable();
            table.integer('district_id').defaultTo('0');
            table.integer('position_id').notNullable();
            table.boolean('is_enable').defaultTo(true);
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
