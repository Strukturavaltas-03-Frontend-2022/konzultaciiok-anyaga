const searchInput = document.querySelector('#searchInput');
const outputSpan = document.querySelector('#output');

let lastTimeout = 0;

searchInput.addEventListener('keyup', (ev) => {
    clearTimeout(lastTimeout);
    lastTimeout = setTimeout( () => {
        clearTimeout(lastTimeout);
        console.log(ev.target.value);
    }, 500);
});

// HTTP kérés küldése egy szerverre.
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://nettuts.hu/jms/joe/customers');
xhr.onload = (ev) => {
    const customers = JSON.parse(ev.target.response);
    console.log(customers);
};
xhr.send();
