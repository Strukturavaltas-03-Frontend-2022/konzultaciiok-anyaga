// 1. lépés: importáljuk a szükséges változókat.
import { apiUrl, tableColumns } from './settings.js';

// 2. lépés: felvesszük a változókat.
const tBody = document.querySelector('.dynamic-table tbody');

// 3. lépés: függvények felvétele.
const sampleProduct = {"id":1,"name":"Dates","price":82,"category":"Electronic"};
const getProducts = async () => {
    const response = await fetch(apiUrl);
    const productList = await response.json();
    return productList;
};

const fillTable = (list = [sampleProduct], body) => {    
    body.innerHTML = '';
    list.forEach( prod => {
        const tr = document.createElement('tr');
        body.appendChild(tr);

        tableColumns.forEach( col => {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = prod[col];
        });
    });
};

const productList = await getProducts();
fillTable(productList, tBody);
