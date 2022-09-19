let span = document.querySelector('.pass');
span.innerHTML = 'Hello programmer!';

/**
 * A szelektorban magadott HTML elem tartalmát módosítja.
 * @param {string} selector - a HTML elem szelektora
 * @param {string} content - a HTML elem új tartalma
 * @return void
 */
const changeHTMLContent = (selector = '', content = '') => {
    const element = document.querySelector(selector);
    element.innerHTML = content;
};

changeHTMLContent('.container', 'Sikerült!');

const users = [
    {id: 1, name: 'Orsi', age: 33},
    {id: 2, name: 'Feri', age: 44},
    {id: 3, name: 'Manyi', age: 55},
    {id: 4, name: 'Sanyi', age: 65},
];

/**
 * Az id alapján megkeresi és visszaadja a users tömb elemét.
 * @param {number} id - a user id-je.
 * @return {User} az id alapján megtalált user.
 */
const getUserByID = (id = 0) => {
    return users.find( user => user.id === id );
};

console.log( getUserByID(2) );
