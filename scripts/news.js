new Vue ({
    el: '#h-news',
    data: {
        show: false,
        news: [
            {id: 0, date: "10.04.2018", title: "В связи с наступлением весны, всем скидка 15%!", text: "Ура, Друзья! Наступила весна! Спешите! Заказав сайт тоолько на этой неделе, вам будет скидка 15%"},
            {id: 1, date: "09.04.2018", title: "У нас новый дизайнер!", text: "Она удивит вас своим творчеством, мы вам гарантируем. Современные дизайны, красивые подходы к вашим задачам"},
            {id: 2, date: "08.04.2018", title: "Не стоим на месте!", text: "Друзья, мы изучили еще одну CMS - Drupal. Спасибо за внимание"},
            {id: 3, date: "05.04.2018", title: "Завершение создания сайта для Радиана!", text: "Сегодня мы закончили разработку сайта для большой компании Радиан, чем очень гордимся. "}
        ],
        newComment: [],
        comments: [
            {post: 0, name: "Матвей Факел", text: "Отличная новость! Обожаю вас"},
            {post: 1, name: "Матвей Факел", text: "Отличная новость! Дизайнер супер."},
            {post: 2, name: "Матвей Факел", text: "Отличная новость! Вы супер."},
            {post: 3, name: "Матвей Факел", text: "Отличная новость! Вы самые лучшие."}
        ]
    }
});