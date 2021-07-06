import GramarketDbRepositoryInterface from './GramarketDbRepositoryInterface';

export default class GramarketDbRepository implements GramarketDbRepositoryInterface {
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
            },{
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
            },{
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
            },{
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
     * Get menu items
     */
    public async getLogo(): Promise<any> {
        return 'https://via.placeholder.com/150x50';
    }

    /**
     * Get menu items
     */
    public async getSalesLogo(): Promise<any> {
        return 'https://via.placeholder.com/150x50';
    }

    public async getFirstBlockContent(): Promise<any> {
        return [
            { id: 1, href: 'https://meloman.kz', src: 'https://www.marwin.kz/media/wysiwyg/dynamic/marvel-legends-legendarnye-personazhi-dlya-legendarnoj-kollekcii2_1.jpg' },
            { id: 2, href: '/', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/ot-poehzii-do-fehntezi-akciya-1-1-na-knigi2.jpg' },
            { id: 3, href: '#', src: 'https://www.marwin.kz/media/wysiwyg/dynamic/luka-v-kino2.jpg' },
            { id: 4, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/ps5_DualSense2.jpg' },
            { id: 5, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/luchshee-detyam-skidki-30-na-assortiment-detskih-knig-ot-rosmehn2.jpg' },
            { id: 6, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/chitaem-s-vygodoj-akciya-2-1-na-knigi-ot-izdatelstva-ast2.jpg' },
            { id: 7, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/knigi-izdatelstva-freedom-po-supercene-2290-teng2.jpg' },
            { id: 8, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/tolko-v-iyule-30-na-seriyu-knig-p-harrisona-ot-izdatelstva-ehksmo2.jpg' },
            { id: 9, href: '#', src: 'https://www.marwin.kz/media/wysiwyg/dynamic/ehksklyuzivy-lego-novinki-20212.gif' },
            { id: 10, href: '#', src: 'https://simg.marwin.kz/media/wysiwyg/dynamic/vdohnovlyajsya-30-na-knigi-izdatelstva-inspiria2.jpg' },
        ]
    }

    public async getHorizontalMenuContent(): Promise<any> {
        return '<ul class="block2-wrapper">' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/category/promotions.html?from=block2/" data-track-promo-name="promotions" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-promotions"> </span> <span class="block2-item-name">Акции</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/beskonechnaya-pupyrka-popits-ili-pop-it-lopni-ih.html?from=block2/" data-track-promo-name="pop-it" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-popit"> </span> <span class="block2-item-name">Pop-it — новый тренд</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/pervaya-kniga-naruto-v-prodazhe.html?from=block2/" data-track-promo-name="pervaya-kniga-naruto-v-prodazhe" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-naruto"> </span> <span class="block2-item-name">«Наруто»</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/magiya-vne-hogvartsa-suveniry-dlya-poklonnikov-potteriany.html?product_list_order=date_novelty&amp;from=block2/" data-track-promo-name="dlya-poklonnikov-potteriany" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-potter"> </span> <span class="block2-item-name">Гарри Поттер</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/brand/lol/?from=block2/" data-track-promo-name="lol" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-lol"> </span> <span class="block2-item-name">L.O.L.</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/books?from=block2/" data-track-promo-name="books" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-books"> </span> <span class="block2-item-name">Книги</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/mezhgalakticheskie-priklyucheniya-ratchet-clank-skvoz-miry.html?from=block2/" data-track-promo-name="Ratchet &amp; Clank: Сквозь миры" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-books"> </span> <span class="block2-item-name">Ratchet &amp; Clank: Сквозь миры</span> </a></li><div data-dy-embedded-object="true"><div class="dy_unit dy_smart_object_879266 dyother dyMonitor" data-adid="smart_object_879266||116|||" data-dy-exp-id="893845" data-dy-var-id="21640167" data-dy-ver-data="9500288::0:1625471309018:73587:90729:1:0:0.7664699610322714" data-dy-att-method="0" data-dy-att-seq="19310">' +
            '<style type="text/css">' +
            '.block2-wrapper{display:flex} .block2-wrapper li{list-style-type:none; margin-right:20px} .block2-wrapper li a {color: #000; text-decoration: unset}' +
            '</style><li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/express-delivery.html?from=block2/"> <span class="block2-item-thumbnail thumbnail-express"> </span> <span class="block2-item-name">Экспресс-магазин</span> </a></li></div></div>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/toys-and-entertainment/table-games?from=block2/" data-track-promo-name="table-games" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-tablegames"> </span> <span class="block2-item-name">Настольные игры</span> </a></li>' +
            '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/videogames/?from=block2/" data-track-promo-name="videogames" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-consoles"> </span> <span class="block2-item-name">Видеоигры и консоли</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/category/novinki.html?from=block2/" data-track-promo-name="recommend" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-recommend"> </span> <span class="block2-item-name">Рекомендуем</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/lidery-prodazh-meloman-top-50-luchshih-tovarov.html?product_list_order=product_rate&amp;from=block2/" data-track-promo-name="lidery-prodazh-meloman" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-hit"> </span> <span class="block2-item-name">ТОП продаж</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/food-items/?from=block2/" data-track-promo-name="sweets" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-sweets"> </span> <span class="block2-item-name">Сладости-напитки</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/tvorchestvo-19692?from=block2/" data-track-promo-name="tvorchestvo" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-art"> </span> <span class="block2-item-name">Творчество, Fine Art</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/press/superskidki-meloman.html?product_list_order=discount_percentage&amp;from=block2/" data-track-promo-name="superskidki-meloman" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-supersale"> </span> <span class="block2-item-name">Суперскидки</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/127-audiotehnika-28213?from=block2/" data-track-promo-name="audiotehnika" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-headphones"> </span> <span class="block2-item-name">Наушники и аудиотехника</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/showcase?from=block2/" data-track-promo-name="showcase" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-showcase"> </span> <span class="block2-item-name">Витрины</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/brand/?from=block2/" data-track-promo-name="brand" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-brands"> </span> <span class="block2-item-name">Бренды</span> </a></li>' +
            // '<li class="item-block2-wrapper"><a class="block2-item" href="https://www.meloman.kz/shkola-kancelyariya-19236?from=block2/" data-track-promo-name="shkola-kancelyariya" data-track-promo-position="block-2.meloman"> <span class="block2-item-thumbnail thumbnail-school"> </span> <span class="block2-item-name">Школа, канцелярия</span> </a></li>' +
            '</ul>';
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
