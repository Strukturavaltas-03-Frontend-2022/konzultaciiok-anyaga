import { apiUrl } from './settings.js';

// Add a td and two buttons to the getted table row.
const addButtons = (tableRow, product = {id: 1}) => {
    const td = document.createElement('td');
    tableRow.appendChild(td);

    const deleteButton = document.createElement('button');
    td.appendChild(deleteButton);
    deleteButton.textContent = 'del';
    deleteButton.addEventListener('click', async () => {
        if (confirm(`Biztosan törlöd a ${product.name} terméket?`)) {
            await fetch(`${apiUrl}/${product.id}`, {
                method: 'DELETE',
            });        
            tableRow.parentElement.removeChild(tableRow);
        }
    });
};

export const fillTable = (list = [{id: 1}], cols, body) => {    
    body.innerHTML = '';
    list.forEach( prod => {
        const tr = document.createElement('tr');
        body.appendChild(tr);

        cols.forEach( col => {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = prod[col];
        });

        addButtons(tr, prod);
    });
};
