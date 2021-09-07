import Database from 'sosise-core/build/Database/Database';
import Helper from 'sosise-core/build/Helper/Helper';
import databaseConfig from '../Config/database';
import GetContentBlocksByPageType from '../Types/GetContentBlocksByPageType';
import GetItemsByContentBlockIdType from '../Types/GetItemsByContentBlockIdType';

import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';

export default class GramarketDbRepository implements GramarketDbRepositoryInterface {

    /**
     * Database connection
     */
    private dbConnection: Database;

    constructor() {
        this.dbConnection = Database.getConnection(databaseConfig.default as string);
    }

    public async getContentBlockByPageType(pageType: string): Promise<GetContentBlocksByPageType[]> {
        const blocks = await this.getBlocks(pageType)

        for (const block of blocks) {
            block.setContentBlockItems(await this.getItemsByContentBlockId(block.id));
        }

        return blocks

    }

    /**
     * Get blocks by page type
     */
    private async getBlocks(pageType: string): Promise<GetContentBlocksByPageType[]> {
        const blocks = await this.dbConnection.client.table('content_block_entity')
            .select([
                'content_block_entity.id AS id',
                'content_block_entity.name AS name',
                'content_block_entity.title AS title',
                'content_block_dict.name AS block',
                'page_type_dict.value AS pageType',
                'content_block_position_dict.position as position',
                'content_block_entity.is_enable AS isEnable',
                'content_block_entity.created_at AS createdAt'
            ])
            //@todo add region filter
            .innerJoin('content_block_dict', 'content_block_entity.block_id', 'content_block_dict.id')
            .innerJoin('page_type_dict', 'content_block_entity.page_type_id', 'page_type_dict.id')
            .innerJoin('content_block_position_dict', 'content_block_entity.position_id', 'content_block_position_dict.id')
            .where('page_type_dict.value', pageType)
            .where('content_block_entity.is_enable', true);

        // Chack is empty
        if (!blocks.length) {
            // @todo throw 404
        }

        const result = new Array();

        // Typecast blocks
        for (const block of blocks) {
            result.push(new GetContentBlocksByPageType(block));
        }
        return result;
    }

    /**
     * 
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
