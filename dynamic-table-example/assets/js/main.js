// 1. lépés: importáljuk a szükséges változókat.
import { apiUrl, tableColumns } from './settings.js';
import { fillTable } from './utils.js';

// 2. lépés: felvesszük a változókat.
const tBody = document.querySelector('.dynamic-table tbody');

// 3. lépés: függvények felvétele.
const sampleProduct = {"id":1,"name":"Dates","price":82,"category":"Electronic"};
const getProducts = async () => {
    const response = await fetch(apiUrl);
    const productList = await response.json();
    return productList;
};

const productList = await getProducts();
fillTable(productList, tableColumns, tBody);
