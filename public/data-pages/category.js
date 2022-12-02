const imgSwiper = "../images/categories";

window.dataCategory = {
    category: [
        {
            name: 'Куртки',
            img: `${imgSwiper}/jackets.jpeg`,
            link: '/',
        },
        {
            name: 'Пальто',
            img: `${imgSwiper}/coat.jpeg`,
            link: '/',
        },
        {
            name: 'Шуби',
            img: `${imgSwiper}/fur-coats.jpeg`,
            link: '/',
        },
        {
            name: 'Парки',
            img: `${imgSwiper}/parks.jpeg`,
            link: '/',
        },
    ],
    catalogTitle: 'Каталог',
    catalogList: [
        {
            name: 'New',
            id: 'new',
        },
        {
            name: 'Bestsellers',
            id: 'bestsellers',
        },
        {
            name: 'Верхня одежа',
            id: 'new',
        },
        {
            name: 'Шуби',
            id: 'new',
        },
        {
            name: 'Тренчи',
            id: 'new',
        },
        {
            name: 'Пальто',
            id: 'coat',
        },
        {
            name: 'Пуховики та жилети',
            id: 'new',
        },
        {
            name: 'Костюми',
            id: 'new',
        },
        {
            name: 'Жакети',
            id: 'new',
        },
        {
            name: 'Сукні',
            id: 'new',
        },
        {
            name: 'Рубашки та блузки',
            id: 'new',
        },
        {
            name: 'Юбки',
            id: 'new',
        },
        {
            name: 'Футболки и топи',
            id: 'tShots',
        },
        {
            name: 'Аксесуары',
            id: 'ju',
        },
        {
            name: 'Sale',
            id: 'sale',
        },
        {
            name: 'Summer',
            id: 'summer',
        },
        {
            name: 'Дивитись все',
            id: 'all',
        },
    ],
    catalogCards: [
        {
            category: 'parks',
            name: 'Синя парка',
            img: `${imgSwiper}/parks.jpeg`,
            prise: '3800',
            color: '',
            new: true,
            sale: 0,
            size:[
                {
                    name: 'xxl',
                    true: true,
                },
                {
                    name: 'xl',
                    true: true,
                },
                {
                    name: 'l',
                    true: true,
                },
                {
                    name: 'm',
                    true: true,
                },
                {
                    name: 's',
                    true: true,
                },
                {
                    name: 'xs',
                    true: true,
                },
            ],

        },
        {
            category: 'coat',
            name: 'Сине пальто',
            img: `${imgSwiper}/coat.jpeg`,
            prise: '4300',
            color: '',
            new: false,
            sale: 10,
            size:[
                {
                    name: 'xxl',
                    true: false,
                },
                {
                    name: 'xl',
                    true: true,
                },
                {
                    name: 'l',
                    true: true,
                },
                {
                    name: 'm',
                    true: false,
                },
                {
                    name: 's',
                    true: false,
                },
                {
                    name: 'xs',
                    true: true,
                },
            ],

        },
        {
            category: 'jackets',
            name: 'Бiла куртка',
            img: `${imgSwiper}/jackets.jpeg`,
            prise: '3500',
            color: '',
            new: false,
            sale: 15,
            size:[
                {
                    name: 'xxl',
                    true: false,
                },
                {
                    name: 'xl',
                    true: false,
                },
                {
                    name: 'l',
                    true: true,
                },
                {
                    name: 'm',
                    true: false,
                },
                {
                    name: 's',
                    true: false,
                },
                {
                    name: 'xs',
                    true: true,
                },
            ],

        },
        {
            category: 'furCoats',
            name: 'Ніжно рожева шуба',
            img: `${imgSwiper}/fur-coats.jpeg`,
            prise: '4500',
            color: '',
            new: false,
            sale: 0,
            size:[
                {
                    name: 'xxl',
                    true: true,
                },
                {
                    name: 'xl',
                    true: true,
                },
                {
                    name: 'l',
                    true: false,
                },
                {
                    name: 'm',
                    true: true,
                },
                {
                    name: 's',
                    true: true,
                },
                {
                    name: 'xs',
                    true: false,
                },
            ],

        },
        {
            category: 'parks',
            name: 'Синя парка',
            img: `${imgSwiper}/parks.jpeg`,
            prise: '3800',
            color: '',
            new: false,
            sale: 20,
            size:[
                {
                    name: 'xxl',
                    true: false,
                },
                {
                    name: 'xl',
                    true: false,
                },
                {
                    name: 'l',
                    true: true,
                },
                {
                    name: 'm',
                    true: true,
                },
                {
                    name: 's',
                    true: false,
                },
                {
                    name: 'xs',
                    true: false,
                },
            ],

        },
        {
            category: 'coat',
            name: 'Сине пальто',
            img: `${imgSwiper}/coat.jpeg`,
            prise: '4300',
            color: '',
            new: false,
            sale: 0,
            size:[
                {
                    name: 'xxl',
                    true: false,
                },
                {
                    name: 'xl',
                    true: true,
                },
                {
                    name: 'l',
                    true: true,
                },
                {
                    name: 'm',
                    true: false,
                },
                {
                    name: 's',
                    true: false,
                },
                {
                    name: 'xs',
                    true: true,
                },
            ],

        },
    ],
}