import { apiUrl, tableColumns, userColumns } from './config.js';
import { JsonService } from './json-service.js';
import { TableGenerator } from './table-generator.js';

const clubService = new JsonService(apiUrl);
const userService = new JsonService('https://nettuts.hu/jms/joe/users');
const clubTableGenerator = new TableGenerator('table.clubs-table', tableColumns);
const userTableGenerator = new TableGenerator('table.users-table', userColumns);

const tableData = await clubService.getAll();
clubTableGenerator.generateTable(tableData);

const userData = await userService.getAll();
userTableGenerator.generateTable(userData);

document.querySelector('.users-table').addEventListener('click', async (ev) => {
    const target = ev.target.classList.contains('fa')
        ? ev.target.parentElement
        : ev.target;

    await userService.remove(target.id);

    const userData = await userService.getAll();
    userTableGenerator.generateTable(userData);
});
