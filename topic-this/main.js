// Module esetén a this undefined.
// Ha a js fájl nem type=module, akkor a this = window.
console.log(window);

const user = {
    name: 'Jimmy',
    email: 'jimmy@gmail.com',
    greet() {
        return `Hi my name is ${this.name}.`;
    },
    getDataWithThis() {
        return (() => {
            return `Name: ${this.name}, email: ${this.email}`;
        })();
    },
    // Ez nem működik, mert az arrow-function nem látja a this-t.
    // getData: () => {
    //     return `Name: ${this.name}, email: ${this.email}`;
    // },
};

console.log( user.greet() );
console.log( user.getDataWithThis() );

// Arrow function és a this eseményekben.
const button = document.querySelector('#clickMe');
button.addEventListener('click', function() {
    console.log('This:', this);
});

button.addEventListener('click', (ev) => {
    console.log('This:', this);
    console.log('Button:', ev.target);
});

const buttonHandler = {
    id: 2,
    button: document.querySelector('#clickMe2'),
    handleClick() {
        this.button.addEventListener('click', function() {
            console.log(this.id);
        });
    },
    handleClickWithArrowFunction() {
        this.button.addEventListener('click', () => {
            console.log(this.id);
        });
    }
};

buttonHandler.handleClickWithArrowFunction();

// Példa táblázattal.
const getProducts = async () => {
    const response = await fetch('https://nettuts.hu/jms/nagyrobi/products');
    const products = await response.json();
    const tBody = document.querySelector('table tbody');
    tBody.innerHTML = '';
    products.forEach( product => {
        const tr = document.createElement('tr');
        tBody.appendChild(tr);

        const id = document.createElement('td');
        tr.appendChild(id);
        id.textContent = product.id;
        
        const name = document.createElement('td');
        tr.appendChild(name);
        name.textContent = product.name;

        const button = document.createElement('button');
        tr.appendChild(button);
        button.textContent = 'delete';

        product.handleClick = function() {
            button.addEventListener('click', async () => {
                await fetch(`https://nettuts.hu/jms/nagyrobi/products/${this.id}`,  {
                    method: 'DELETE',
                });
                alert(`${this.name} deleted!`);
                await getProducts();
            });
        };
        product.handleClick();
    });
};

await getProducts();
