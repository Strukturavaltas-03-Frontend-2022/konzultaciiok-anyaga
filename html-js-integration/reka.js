const h1 = document.querySelector('h1');
h1.innerHTML = 'Sziasztok, <b>Réka</b> vagyok!';

// Elem eltávolítása.
// document.body.removeChild(h1);

const users = [
    {id: 1, name: 'Kiss Aladár', age: 44},
    {id: 2, name: 'Nagy Aladár', age: 65},
    {id: 3, name: 'Közepes Aladár', age: 55},
];

// Visszaadja azt a user-t, akinek az id-je megegyezik a kapott id-vel.
const getUserByID = (id = 0) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    // return users.find( user => user.id === id );
};

console.log( getUserByID(1) );
console.log( getUserByID(2) );
console.log( getUserByID(3) );

/**
 * Bármely HTML elem szöveges tartalmát módosítja.
 * @param {string} selector - az elem szelektora
 * @param {string} content - az elem új tartalma
 * @return void
 */
const changeElementContent = (selector = '', content = '') => {
    const element = document.querySelector(selector);
    element.innerHTML = content;
};

changeElementContent('h1', 'Hello JS programmer!');

changeElementContent('.container', 'Hello, I\'m the container!');
