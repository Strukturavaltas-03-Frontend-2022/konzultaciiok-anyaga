const samleUser = {
    "id": 1,
    "name": "Cad Bedford",
    "email": "cbedford0@symantec.com", 
    "category":"Guest"
};
const container = document.querySelector('.container');
const span = document.querySelector('.pass');

const button = document.createElement('button');
container.appendChild(button);
button.type = 'button';
button.textContent = 'Show a message!';

const input = document.createElement('input');
container.appendChild(input);
input.value = 'Kiss Róbert';

button.addEventListener('click', function() {
    const d = new Date();
    input.value = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(this);
});

input.addEventListener('keyup', (ev) => {
    // password: squirrel
    if (input.value === 'squirrel') {
        span.innerHTML = 'OK';
    } else {
        span.innerHTML = 'Bad Password!';
    }
});


const addUser = async () => {
    // const name = document.querySelector('.nameInput').value;
    // const email = document.querySelector('.emailInput').value;
    // const category = document.querySelector('.categoryInput').value;
    await fetch('https://nettuts.hu/jms/anita/users', {
        method: 'POST',
        body: JSON.stringify({name: 'Kiss Anita', email: 'anita@gmail.com', category: 'user'}),
        headers: {
            'Content-type': 'application/json',
        }
    });


};

await addUser();