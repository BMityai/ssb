import Database from 'sosise-core/build/Database/Database';
import Helper from 'sosise-core/build/Helper/Helper';
import databaseConfig from '../../config/database';
import AllCategoriesType from '../Types/AllCategoriesType';
import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';

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
    public async getContent(contentName: string, pageType: string, entityId: number | null = null, districtId: number = 0, sort: string = 'desc'): Promise<any> {
        return await this.dbConnection.client.table('content')
            .select([
                'content.id as id',
                'content.text as text',
                'content.url as url',
                'content.image as image',
                'content.block_id as blockId',
                'content.entity_id as entityId',
                'page_type_dict.value as pageType',
                // 'district.value as district',
                'content_dict.name as block',
            ])
            .innerJoin('content_dict', 'content.block_id', 'content_dict.id')
            .innerJoin('page_type_dict', 'content.page_type_id', 'page_type_dict.id')
            // .innerJoin('district', 'content.district_id', 'district.id')
            .where('content_dict.name', contentName)
            .where('page_type_dict.value', pageType)
            .where('content.district_id', districtId)
            .where('content.is_enable', 1)
            .where('content.entity_id', entityId)
            .orderBy('content.position', sort);
    }

    public async getAdminUser(login: string) {
        return await this.dbConnection.client.table('admin_user')
            .where('username', login)
            .orWhere('email', login)
            .first()
    }

    public async getUserById(id: string) {
        return await this.dbConnection.client.table('admin_user')
            .where('id', id)
            .first()
    }

}
