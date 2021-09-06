import Database from 'sosise-core/build/Database/Database';
import databaseConfig from '../Config/database';
import GetContentBlocksByIdType from '../Types/GetContentBlockByIdType';
import GetContentBlocksType from '../Types/GetContentBlocksType';
import PrimevueTableParamsConverterUnifier from '../Unifiers/PrimevueTableParamsConverterUnifier';
import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';

export default class GramarketDbRepository implements GramarketDbRepositoryInterface {

    /**
     * Database connection
     */
    private dbConnection: Database;

    constructor() {
        this.dbConnection = Database.getConnection(databaseConfig.default as string);
    }

    /**
     * Get all blocks for admin panel listing
     */
    public async getBlocks(filterParams: PrimevueTableParamsConverterUnifier, getCount = false): Promise<GetContentBlocksType[]> {
        let sqlString =
            `SELECT 
            content_block_entity.id AS 'id', 
            content_block_entity.name AS 'name',
            content_block_entity.title AS 'title',
            content_block_dict.name AS block,
            page_type_dict.value AS pageType,
            content_block_entity.is_enable AS isEnable,
            content_block_entity.created_at AS createdAt 
        FROM 
            content_block_entity`;

        sqlString += ` INNER JOIN 
            content_block_dict ON content_block_entity.block_id = content_block_dict.id
        INNER JOIN
            page_type_dict ON content_block_entity.page_type_id = page_type_dict.id`;

        if (filterParams.applyFilter) {
            sqlString = this.applyFilters(sqlString, filterParams);
        }

        sqlString = this.applySort(sqlString, filterParams);

        if (!getCount) {
            sqlString = this.applyPaginate(sqlString, filterParams);
        }

        const result = await this.dbConnection.client.raw(sqlString);

        if (getCount) {
            return result[0].length;
        }
        return result[0];
    }

    /**
     * Get content block by id
     */
    public async getBlockById(blockId: string): Promise <GetContentBlocksByIdType> {
        const contentBlock = await this.dbConnection.client.table('content_block_entity')
            .select()
            .innerJoin('content_block_item', 'content_block_entity.id', 'content_block_item.content_block_id')
            .innerJoin('content_block_dict', 'content_block_entity.block_id', 'content_block_dict.id')
            .innerJoin('page_type_dict', 'content_block_entity.page_type_id', 'page_type_dict.id')
            .where('content_block_entity.id', blockId);
        return new GetContentBlocksByIdType(contentBlock);
    }

    /**
     * Apply primevue table filters
     */
    private applyFilters(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier) {
        let fitIteration = true;
        for (const filter of filterParams.filters) {

            const havingOrAnd = fitIteration ? 'HAVING' : 'AND';
            fitIteration = false;
            sqlString += ` ${havingOrAnd} ${filter} `;
        }
        return sqlString;
    }

    /**
     * Apply primevue sort (default sort by id)
     */
    private applySort(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier) {
        sqlString += ` ORDER BY ${filterParams.sortField} ${filterParams.sortOrder}`;
        return sqlString;
    }

    /**
     * Apply primevue paginate (default 10 rows)
     */
    private applyPaginate(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier) {
        const offset = filterParams.pageNumber * filterParams.rows;
        sqlString += ` LIMIT ${offset}, ${filterParams.rows} `;
        return sqlString;
    }

}