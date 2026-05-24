import Handlebars from 'handlebars';
import { products } from '../../data.js';
import productTemplateSource from '../templates/product.hbs';

// Compile the .hbs template
const productTemplate = Handlebars.compile(productTemplateSource);

// Render each product and inject into DOM
const container = document.getElementById('products');

products.forEach(product => {
  container.innerHTML += productTemplate(product);
});
