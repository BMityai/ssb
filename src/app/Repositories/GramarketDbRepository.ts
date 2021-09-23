import { result } from 'lodash';
import Database from 'sosise-core/build/Database/Database';
import Helper from 'sosise-core/build/Helper/Helper';
import databaseConfig from '../../config/database';
import AllCategoriesType from '../Types/AllCategoriesType';
import PrimevueTableParamsConverterUnifier from '../Components/Content/Block/adminhtml/Unifiers/PrimevueTableParamsConverterUnifier';
import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';
import ContentBlockForListingType from '../Components/Content/Block/adminhtml/Types/ContentBlockForListingType';

export default class GramarketDbRepository implements GramarketDbRepositoryInterface {

    /**
     * Database connection
     */
    private dbConnection: Database;

    constructor() {
        this.dbConnection = Database.getConnection(databaseConfig.default as string);
    }

    public async getAllCategories(): Promise<AllCategoriesType> {
        const categories = await this.dbConnection.client.raw(
            "select `cc`.`id` as `entity_id`, `cc`.`parent_id`, `cc`.`position`, `cc`.`level`, `ccv`.`value`, `attribute`.`code`, `cc`.`created_at`, `cc`.`updated_at` " +
            "from `catalog_category` as `cc` left join `catalog_category_int` as `cci` on `cc`.`id` = `cci`.`category_id` " +
            "left join `catalog_category_varchar` as `ccv` on `cc`.`id` = `ccv`.`category_id` left join `catalog_category_text` as `cct` on `cc`.`id` = `cct`.`category_id` " +
            "left join `catalog_category_decimal` as `ccd` on `cc`.`id` = `ccd`.`category_id` left join `attribute` as `a1` on `cci`.`attribute_id` = `a1`.`id` " +
            "left join `attribute` on `ccv`.`attribute_id` = `attribute`.`id` order by `cc`.`position` ASC");
        return new AllCategoriesType(categories[0]);
    }

    /**
     * Get content
     */
    public async getContent(contentName: string, pageType: string, districtId: number = 0, sort: string = 'desc'): Promise<any> {
        return await this.dbConnection.client.table('content_block_item')
            .select([
                'content_block_item.id as id',
                'content_block_item.text as text',
                'content_block_item.text as text',
                'content_block_item.url as url',
                'content_block_item.image as image',
                'content_block_entity.block_id as blockId',
                'page_type_dict.value as pageType',
                // 'district.value as district',
                'content_block_dict.name as block',
            ])
            .innerJoin('content_block_entity', 'content_block_item.content_block_id', 'content_block_entity.id')
            .innerJoin('content_block_dict', 'content_block_entity.block_id', 'content_block_dict.id')
            .innerJoin('page_type_dict', 'content_block_entity.page_type_id', 'page_type_dict.id')
            // .innerJoin('district', 'content.district_id', 'district.id')
            .where('content_block_dict.name', contentName)
            .where('page_type_dict.value', pageType)
            .where('content_block_entity.district_id', districtId)
            .where('content_block_entity.is_enable', 1)
            .orderBy('content_block_item.position', sort);
    }

    /**
     * Get admin user by login or email
     */
    public async getAdminUser(login: string) {
        return await this.dbConnection.client.table('admin_user')
            .where('username', login)
            .orWhere('email', login)
            .first()
    }

    /**
     * Get user by id
     */
    public async getUserById(id: string) {
        return await this.dbConnection.client.table('admin_user')
            .where('id', id)
            .first()
    }

    /**
     * Get all blocks for admin panel listing
     */
    public async getBlocks(filterParams: PrimevueTableParamsConverterUnifier, getCount = false): Promise<ContentBlockForListingType[]> {
        let sqlString =
            `SELECT 
            content_block_entity.id AS 'id', 
            content_block_entity.name AS 'name',
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
    public async getBlockById(blockId: string) {
        return await this.dbConnection.client.table('content_block_entity')
            .select()
            .innerJoin('content_block_item', 'content_block_entity.id', 'content_block_item.content_block_id')
            .innerJoin('content_block_dict', 'content_block_entity.block_id', 'content_block_dict.id')
            .innerJoin('page_type_dict', 'content_block_entity.page_type_id', 'page_type_dict.id')
            .where('content_block_entity.id', blockId);
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
