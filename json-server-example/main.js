import { apiUrl } from './assets/settings.js';

// Create a new user.
// {"id":1,"name":"Cad Bedford","email":"cbedford0@symantec.com","category":"Guest"}
await fetch(`${apiUrl}users`, {
    method: 'POST',
    body: JSON.stringify({"name":"Szilágyi Viktor","email":"cbedford0@symantec.com","category":"Guest"}),
    headers: {
        'Content-type': 'application/json',
    },
});

const response = await fetch(`${apiUrl}users`);
const userList = await response.json();
console.log(userList);
