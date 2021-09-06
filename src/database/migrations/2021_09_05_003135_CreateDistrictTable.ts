import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CreateRegionTable extends BaseSchema {

    protected tableName = 'region';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').unique();
            table.string('code').unique();
            table.boolean('status').defaultTo(true);
            table.boolean('visible').defaultTo(true);
            table.integer('position').notNullable();
            table.string('url').unique();
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
