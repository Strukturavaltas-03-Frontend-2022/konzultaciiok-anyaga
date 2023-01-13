const users = [{"id":1,"name":"Páhy Zoárd Zsolt","email":"pzedzoard@gmail.com","category":"Admin","bio":"dfghjchgjnchvm"},{"id":2,"name":"Amanda Wintlelq","email":"hwintle1@ow.ly","category":"User"},{"id":3,"name":"McLaren Mercedes","email":"alicence3@example.com","category":"Guest"},{"id":6,"name":"Sylvester Baugh","email":"sbaugh5@over-blog.com","category":"Guest","bio":"gh"},{"id":7,"name":"Benita McCusker","email":"bmccusker6@vk.com","category":"Admin"},{"id":8,"name":"Cecelia Tarney","email":"ctarney7@yandex.ru","category":"Admin"}];

// Email-ben szerepel az kapott string és category = kapott kategóriával
const filterUsers = (list = users, emailPhrase = '', category = '') => {
    return list.filter( user => user.email.includes(emailPhrase) && user.category == category )
        .map( item => item.name );
};


const setBackgroundColor = () => {
    const liList = document.querySelectorAll('.food-list li');
    // background-color: yellow
    Array.from(liList).forEach( li => li.style.backgroundColor = 'yellow' );
    // new Array(...liList).forEach( li => li.style.backgroundColor = 'yellow' );
}
