// Hagyományos megoldás.
// fetch('https://nettuts.hu/jms/nagyrobi/products').then(
//     response => response.json(),
//     err => console.error('Baj van:', err),
// ).then(
//     productArray => console.log(productArray),
//     err => console.error('It is not a json!'),
// );

// Megoldás async/await használatával.
export const getProducts = async () => {
    const response = await fetch('https://nettuts.hu/jms/nagyrobi/products');
    const products = await response.json();
    return products;
};
