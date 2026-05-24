import Handlebars from 'handlebars';
import { products } from '../../data.js';

const productTemplateSource = `
<div class="product-card">
  <h2 class="product-name">{{name}}</h2>
  <p class="product-description">{{description}}</p>
  <span class="product-price">\${{price}}</span>
</div>
`;

const productTemplate = Handlebars.compile(productTemplateSource);

const container = document.getElementById('products');

products.forEach(product => {
  container.innerHTML += productTemplate(product);
});