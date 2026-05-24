import Handlebars from 'handlebars';
import { products } from '../../data.js';
import getTimeGreeting from './greetings.js';
import { createCounter, getStatus } from './counter.js';

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

const greetingEl = document.getElementById('greeting');
greetingEl.textContent = `${getTimeGreeting()}`;

const counter = createCounter(0);

const countEl  = document.getElementById('count');
const statusEl = document.getElementById('status');

function updateUI() {
  countEl.textContent  = counter.getCount();
  statusEl.textContent = getStatus(counter.getCount());
}

updateUI();

document.getElementById('increment').addEventListener('click', () => {
  counter.increment();
  updateUI();
});

document.getElementById('decrement').addEventListener('click', () => {
  counter.decrement();
  updateUI();
});

document.getElementById('reset').addEventListener('click', () => {
  counter.reset();
  updateUI();
});
