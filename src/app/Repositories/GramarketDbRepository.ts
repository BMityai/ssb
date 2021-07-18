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
    public async getContent(contentName: string, area: string, entityId: number | null = null, districtId: number = 0, sort: string = 'asc'): Promise<any> {
        return await this.dbConnection.client.table('content')
            .select([
                'content.id as id',
                'content.text as text',
                'content.url as url',
                'content.image as image',
                'content.block_id as blockId',
                'content.entity_id as entityId',
                'area_dict.value as area',
                // 'district.value as district',
                'content_dict.name as block',
            ])
            .innerJoin('content_dict', 'content.block_id', 'content_dict.id')
            .innerJoin('area_dict', 'content.area_id', 'area_dict.id')
            // .innerJoin('district', 'content.district_id', 'district.id')
            .where('content_dict.name', contentName)
            .where('area_dict.value', area)
            .where('content.district_id', districtId)
            .where('content.is_enable', 1)
            .where('content.entity_id', entityId)
            .orderBy('content.position', sort);
    }

    /**
     * Get logo
     */
    public async getSalesLogo(): Promise<any> {
        return 'https://via.placeholder.com/150x50';
    }

    public async getSecondBlockContent(): Promise<any> {
        return '<div class="category-banners-block">' +
            '<div class="block4">' +
            '<div class="block4-half">' +
            '<div id="block4_1" class="block4_item" data-dy-embedded-object="true"><div class="dy_unit dy_smart_object_1068684 dyother dyMonitor" data-dy-exp-id="1081869" data-dy-var-id="26161838" data-dy-ver-data="10268786::31:1625510188019:95572:12970:2:4:0" data-dy-att-method="2" data-dy-att-seq="12970" data-adid="smart_object_1068684||645|||"><style type="text/css">#block4_1>div {' +
            'height: 100%;' +
            '}</style><a href="https://www.meloman.kz/press/beskonechnaya-pupyrka-popits-ili-pop-it-lopni-ih.html?from=block41"> ' +
            '<img src="https://cdn.dynamicyield.com/api/8771345/images/21a385398dbe1__5_gif" alt=""> ' +
            '</a></div></div>' +
            '<div id="block4_4-5" data-dy-embedded-object="true"><div class="dy_unit dy_smart_object_1054153 dyother dyMonitor" data-adid="smart_object_1054153||912|||" data-dy-exp-id="1067208" data-dy-var-id="26161959" data-dy-ver-data="10268811::1:1625510185243:95572:12970:2:4:0" data-dy-att-method="2" data-dy-att-seq="12970"><style type="text/css">#block4_4-5 .dy_unit {' +
            'width: 100%;' +
            'display: flex;' +
            'justify-content: space-between;' +
            '}</style><div id="block4_4" class="block4_item">' +
            '<a href="https://www.meloman.kz/videogames/nintendo/?from=block44"> ' +
            '<img src="https://cdn.dynamicyield.com/api/8771345/images/1d011f65ab4cb__23_png" alt=""> ' +
            '</a>' +
            '</div>' +
            '<div id="block4_5" class="block4_item">' +
            '<a href="https://www.meloman.kz/TOP-50-Naushniki-audiotehnika-elektronika?product_list_order=product_rate&amp;from=block44"> ' +
            '<img src="https://cdn.dynamicyield.com/api/8771345/images/b313d5c0ea93__29_png" alt=""> ' +
            '</a>' +
            '</div></div></div>' +
            '</div>' +
            '<div id="block4_2-3-6-7" class="block4-half" data-dy-embedded-object="true"><div class="dy_unit dy_smart_object_1054159 dyother dyMonitor" data-dy-exp-id="1067214" data-dy-var-id="26161951" data-dy-ver-data="10270733::3:1625510188874:95572:12970:2:4:0" data-dy-att-method="2" data-dy-att-seq="12970" data-adid="smart_object_1054159||645|||"><style type="text/css">#block4_2-3-6-7>.dy_unit {' +
            'display: flex;' +
            'flex-wrap: wrap;' +
            'justify-content: space-between;' +
            '}</style><div id="block4_2" class="block4_item">' +
            '<a href="https://www.meloman.kz/press/zharkie-novinki-chitaem-v-ijule.html?from=block42s"> ' +
            '<img src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/1.jpg" alt=""> ' +
            '</a>' +
            '</div>' +
            '<div id="block4_3" class="block4_item">' +
            '<a href="https://www.meloman.kz/press/novinka-holsty-marki-dell-arte.html?from=block42s"> ' +
            '<img src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/19-05-21_Standard_View_D2.jpg" alt=""> ' +
            '</a>' +
            '</div>' +
            '<div id="block4_6" class="block4_item">' +
            '<a href="https://www.meloman.kz/table-games/bricks/?from=block42s"> ' +
            '<img src="https://simg.marwin.kz/media/wysiwyg/dynamic/mel4-2/19-05-21_Standard_View_D3.jpg" alt=""> ' +
            '</a>' +
            '</div>' +
            '<div id="block4_7" class="block4_item">' +
            '<a href="https://www.meloman.kz/press/must-have-dlya-lyubogo-hudozhnika-maneken-cheloveka.html?from=block42s"> ' +
            '<img src="https://simg.marwin.kz/media/wysiwyg/dynamic/4-2-3/22.jpg" alt=""> ' +
            '</a>' +
            '</div> </div></div>' +
            '</div>' +
            '</div>';

    }
}
