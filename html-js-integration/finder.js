'use strict';

/**
 * Feladat: 
 * - Az űrlapon bevitt név alapján keressük meg az adott felhasználót, 
 * és jelenítsük meg az adatait az output osztályú elemben.
 */

// 1. változók felvétele
const nameInput = document.querySelector('.form__input--name');
const primaryButton = document.querySelector('.btn-primary');
const outputSpan = document.querySelector('.output');

const users = [
    {id: 1, name: 'Orsi', age: 33},
    {id: 2, name: 'Feri', age: 44},
    {id: 3, name: 'Manyi', age: 55},
    {id: 4, name: 'Sanyi', age: 65},
];

// 2. Függvények.
const getUserByName = () => {
    return users.find( user => nameInput.value.toLowerCase() === user.name.toLowerCase() );
};

// 3. Eseménykezelők.
primaryButton.addEventListener('click', () => {
    const user = getUserByName();
    outputSpan.textContent = JSON.stringify(user);
});
