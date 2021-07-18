import BaseSchema from 'sosise-core/build/Database/BaseSchema';

/**
 * If you need more information, see: http://knexjs.org/#Schema
 */
export default class CreateAttributeTable extends BaseSchema {

    protected tableName = 'attribute';

    /**
     * Run the migrations.
     */
    public async up(): Promise<void> {
        await this.dbConnection.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('code');
            table.integer('type_id');
            table.string('frontend_input').nullable();
            table.string('frontend_label').nullable();
            table.boolean('is_required').defaultTo(0);
            table.boolean('is_unique').defaultTo(0);
            table.string('table').defaultTo(0);
            table.string('note').nullable;
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
