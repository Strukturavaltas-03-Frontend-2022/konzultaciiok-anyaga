import { users } from './users.js'

// 1. gyakorlat
/**
 * Kiválogatja és visszaadja az adott városban élő felhasználókat 
 * egy új tömbben.
 * @param {[User]} users - a felhasználók tömbje.
 * @param {string} city - a város neve.
 * @return egy új tömb ami tartalmazza az adott városban élő felhasználókat.
 */
const getUsersByCity = (users = [], city = '') => {
    return users.filter( user => user.city === city );
};

/**
 * Visszaadja azt a felhasználót, akinek az id-je megegyezik a kapott id-vel.
 * @param {[User]} users - felhasználók
 * @param {number} id - az felhasználó azonosítója
 * @return {User} az id alapján megtalált felhasználó
 */
const getUserById = (users = [], id = 0) => {
    return users.find( user => user.id === id );
};

/**
 * Visszaadja azokat a felhasználókat, akiknek az házszáma nagyobb mint 44.
 * @param {[User]} users - felhasználók tömbje.
 * @return egy új tömb ami tartalmazza a kiválasztott felhasználókat.
 */
const filterUserByStreetNumber = (users = []) => {
    // streetNumber: '44.',
    return users.filter( user => parseInt(user.streetNumber.replace(/[^0-9]/g, '')) > 44 );
};

export {
    getUsersByCity,
    getUserById,
    filterUserByStreetNumber,
}
