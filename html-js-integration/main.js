const container = document.querySelector('.container');

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

input.addEventListener('keydown', (ev) => {
    console.log(ev);
    // ev.preventDefault();
});