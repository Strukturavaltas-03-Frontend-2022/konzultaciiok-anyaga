import { apiUrl } from './settings.js';
import { getJsonList, generateCardList } from './utils.js';

// 1. Változók.
const productContainer = document.querySelector('.main__product-container');
const cardProductTemplate = document.querySelector('.card__product-template');

const sampleProduct = {
    id: 1000,
    category: "Grocery",
    name: "Cinnamon Buns Sticky",
    price: 30,
};

// 2. Függvények.
const products = await getJsonList(apiUrl);
generateCardList(products, productContainer, cardProductTemplate);
