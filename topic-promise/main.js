import myPromise from "./practice.js";
import { getProducts } from './async-await.js';

// Kati megigéri Pistinek hogy süt neki tortát.
const cakePromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if (Math.random() > 0.5) {
            resolve('cheese cake');
        } else {
            reject('Kati COVID-os lett!');
        }        
    }, 5000);
});

// A szülinapon várjuk a tortát.
cakePromise.then(
    (value) => console.log(value),
    (err) => console.error(err),
);

console.log('after promise');

// HTTP kérés Promise-al.
const sampleProduct = {"id":1,"name":"Dates","price":82,"category":"Electronic"};
const showDataTable = (list = [sampleProduct]) => {
    const container = document.querySelector('.data-container');
    const table = document.createElement('table');
    container.appendChild(table);

    const tBody = document.createElement('tbody');
    table.appendChild(tBody);

    console.time('inner');
    list.forEach( item => {
        // tBody.innerHTML += `<tr>
        //     <td>${item.id}</td>
        //     <td>${item.name}</td>
        //     <td>${item.price}</td>
        //     <td>${item.category}</td>
        // </tr>`;
        const tr = document.createElement('tr');
        tBody.appendChild(tr);

        Object.values(item).forEach( value => {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = value;
        });
    });
    console.timeEnd('inner');
};

fetch('https://nettuts.hu/jms/nagyrobi/products').then(
    response => response.json(),
    err => console.error('Baj van:', err),
).then(
    productArray => showDataTable(productArray),
    err => console.error('It is not a json!'),
);

console.log('Elküldtük a kérést a szerverre!');

// MyPromise tesztelése.
myPromise([4, '6', 9]).then(
    newArray => console.log(newArray),
    err => console.error(err),
);

( async () => {
    const products = await getProducts();
    console.log(products);
})();

console.log('before top-level await');

try {
    const products = await getProducts();
    console.log(products);    
} catch (e) {
    console.error(e);
}

console.log('after top-level await');
// getProducts().then(
//     products => console.log(products),
//     err => console.error(err),
// );
