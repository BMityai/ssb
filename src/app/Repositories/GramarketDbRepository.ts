import Database from 'sosise-core/build/Database/Database';
import Helper from 'sosise-core/build/Helper/Helper';
import databaseConfig from '../../config/database';
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
     * Get menu items
     */
    public async getMenu(): Promise<any> {
        return [
            {
                id: 1, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Книги', children: [
                    {
                        id: 11, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Детская литература', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1111' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1111' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1111' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1111' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1111' }
                        ]
                    },
                    {
                        id: 12, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Спорт', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1222' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1222' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1222' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1222' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1222' }
                        ]
                    },
                    {
                        id: 13, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'IT технроргии', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_14' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_14' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_14' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_14' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 14, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Художественная литература', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 15, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Психология', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                ]
            },
            {
                id: 2, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Спорт', children: [
                    {
                        id: 11, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Футбол', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 12, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Баскетбол', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 13, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Волейбол', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 14, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Хоккей', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 15, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Бокс', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                ]
            }, {
                id: 3, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Фильмы', children: [
                    {
                        id: 11, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Боевики', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 12, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Комедии', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 13, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Ужасы', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 14, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Триллер', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 15, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Фантастика', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                ]
            }, {
                id: 4, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Недвижимость', children: [
                    {
                        id: 11, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Аренда', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 12, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Покупка', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 13, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Продажа', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    }
                ]
            }, {
                id: 5, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'Дом и сад', children: [
                    {
                        id: 11, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_144444444', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 12, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1333333', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 13, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_13234234', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 14, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_14234124', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                    {
                        id: 15, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1345234', children: [
                            { id: 111, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 112, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 113, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 114, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' },
                            { id: 115, thumbnail: 'https://via.placeholder.com/25x25', href: '/test', name: 'test_1' }
                        ]
                    },
                ]
            },

        ];
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
}
