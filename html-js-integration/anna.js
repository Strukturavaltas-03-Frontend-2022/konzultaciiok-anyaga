/**
 * A függvény a kapott tömb elemeit egyesével kiírja a console-ra.
 * @param {[number]} numbers - számok tömbje.
 * @return void
 */
const readNumbers = (numbers = [1]) => {
    numbers.forEach( num => {
        console.log( num );
    });
};

readNumbers([1, 2, 3, 20, 44, 67]);

/**
 * Visszaadja azt a felhasználót, akinek az id-je megegyezik a kapott paraméterrel.
 * @param {[user]} users - a felhasználók tömbje.
 * @param {number} id - az id, ami alapján keressük a felhasználót.
 * @return az id alapján megtalált felhasználót.
 */
const users = [
    {id: 1, name: 'Pisti', age: 33},
    {id: 2, name: 'Mari', age: 44},
    {id: 3, name: 'Feri', age: 55},
    {id: 4, name: 'Ábel', age: 55},
    {id: 5, name: 'Pisti', age: 65},
];

const getUserById = (users = [], name = '') => {
    return users.find( user => user.name === name );
};

console.log( getUserById(users, 'Pisti') );
console.log( getUserById(users, 'Feri') );
console.log( getUserById(users, 'Mari') );

const sortUsersByName = (users) => {
    return users.sort( (a, b) => a.name.localeCompare(b.name) );
};
console.log( sortUsersByName(users) );
