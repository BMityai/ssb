import Database from 'sosise-core/build/Database/Database';
import databaseConfig from '../Config/database';
import GetContentBlockOptionsType from '../Types/GetContentBlockOptionsType';
import GetContentBlocksByIdType from '../Types/GetContentBlockByIdType';
import GetItemsByContentBlockIdType from '../Types/GetItemsByContentBlockIdType';
import PrimevueTableParamsConverterUnifier from '../Unifiers/PrimevueTableParamsConverterUnifier';
import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';
import GetContentBlockPositionDictOptionsType from '../Types/GetContentBlockPositionDictOptionsType';
import Helper from 'sosise-core/build/Helper/Helper';
import AttributeSetType from '../../../AttributeSet/Types/AttributeSetType';
import ContentBlockForListingType from '../Types/ContentBlockForListingType';

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
    public async getBlocks(filterParams: PrimevueTableParamsConverterUnifier, applyPaginate = false): Promise<ContentBlockForListingType[]> {
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

        if (!applyPaginate) {
            sqlString = this.applyPaginate(sqlString, filterParams);
        }

        const result = await this.dbConnection.client.raw(sqlString);

        return result[0];
    }

    /**
     * Get content block by id
     */
    public async getBlockById(blockId: string): Promise<GetContentBlocksByIdType> {
        const result = await this.dbConnection.client.table('content_block_entity')
            .select([
                'content_block_entity.id AS id',
                'content_block_entity.name AS name',
                'content_block_entity.title AS title',
                'content_block_entity.is_enable AS isEnable',
                'content_block_entity.created_at AS createdAt',
                'content_block_dict.id AS blockId',
                'content_block_position_dict.id AS positionId',
                'page_type_dict.id AS pageTypeId',
            ])
            .innerJoin('content_block_dict', 'content_block_entity.block_id', 'content_block_dict.id')
            .innerJoin('page_type_dict', 'content_block_entity.page_type_id', 'page_type_dict.id')
            .innerJoin('content_block_position_dict', 'content_block_entity.position_id', 'content_block_position_dict.id')
            .where('content_block_entity.id', blockId)
            .first();
        // Typecast content block
        const contentBlock = new GetContentBlocksByIdType(result);

        contentBlock.setItems(await this.getItemsByContentBlockId(contentBlock.id));

        return contentBlock;
    }

    /**
     * Delete content block by id
     */
    public async deleteBlockById(blockId: string): Promise<void> {

    }

    /**
     * Delete content block by id
     */
    public async deleteItemsByBlockId(blockId: string): Promise<void> {

    }

    /**
     * Delete content block by id
     */
    public async getImagesForDelete(blockId: string): Promise<string[]> {

        const images = await this.dbConnection.client
            .select('image')
            .table('content_block_item')
            .where('content_block_id', blockId);

        // prepare result
        const result = new Array();
        for (const item of images) {
            result.push(item.image);
        }
        return result
    }

    /**
     * Get content block dict options
     */
    public async getBlockDictOptions(): Promise<GetContentBlockOptionsType[]> {
        const result = await this.dbConnection.client.table('content_block_dict')
            .select([
                'content_block_dict.id AS id',
                'content_block_dict.name AS value',
            ])
            .orderBy('id');
        return result as GetContentBlockOptionsType[];
    }

    /**
     * Get page type dict options
     */
    public async getPageTypeOptions(): Promise<GetContentBlockOptionsType[]> {
        const result = await this.dbConnection.client.table('page_type_dict')
            .select([
                'page_type_dict.id AS id',
                'page_type_dict.value AS value',
            ])
            .orderBy('id');
        return result as GetContentBlockOptionsType[];
    }

    /**
     * Get content block position options
     */
    public async getContentBlockPositionDictOptions(): Promise<GetContentBlockPositionDictOptionsType[]> {
        const result = await this.dbConnection.client.table('content_block_position_dict')
            .select([
                'content_block_position_dict.id AS id',
                'content_block_position_dict.position AS value',
                'content_block_position_dict.page_type_id AS pageTypeId',

            ])
            .orderBy('id');

        const positions = {};
        for (const position of result) {
            if (!positions[position.pageTypeId]) {
                positions[position.pageTypeId] = new Array();
            }
            positions[position.pageTypeId].push({ id: position.id, value: position.value });
        }
        return positions as GetContentBlockPositionDictOptionsType[];
    }

    /**
     * Get attribute set options
     */
    public async getAttributeSetOptions(): Promise<AttributeSetType[]> {
        const result = await this.dbConnection.client.table('attribute_set')
            .select(['id', 'title'])
        return result;
    }

    /**
     * Apply primevue table filters
     */
    private applyFilters(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier): string {
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
    private applySort(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier): string {
        sqlString += ` ORDER BY ${filterParams.sortField} ${filterParams.sortOrder}`;
        return sqlString;
    }

    /**
     * Apply primevue paginate (default 10 rows)
     */
    private applyPaginate(sqlString: string, filterParams: PrimevueTableParamsConverterUnifier): string {
        const offset = filterParams.pageNumber * filterParams.rows;
        sqlString += ` LIMIT ${offset}, ${filterParams.rows} `;
        return sqlString;
    }

    /**
     * Get content block items
     */
    private async getItemsByContentBlockId(blockId: number): Promise<GetItemsByContentBlockIdType[]> {
        return await this.dbConnection.client.table('content_block_item')
            .select([
                'content_block_item.id as id',
                'content_block_item.url as url',
                'content_block_item.image as image',
                'content_block_item.position as position'
            ])
            .where('content_block_item.content_block_id', blockId) as GetItemsByContentBlockIdType[]
    }
}
