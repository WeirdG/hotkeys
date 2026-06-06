// Product Tabs Component

import { getProductsByCategory } from '../data.js';
import { getProductIcon } from './productIcons.js';

export function createProductTabs({ onProductChange }) {
  const wrapper = document.getElementById('productTabsWrapper');
  const container = document.getElementById('productTabs');

  function render(categoryId) {
    const products = getProductsByCategory(categoryId);
    const html = products.map(p => {
      const icon = getProductIcon(p.id);
      return `
        <button class="product-tab" data-product="${p.id}" title="${p.name}">
          <span class="product-tab-icon">${icon}</span>
          <span class="product-tab-name">${p.name}</span>
        </button>
      `;
    }).join('');

    container.innerHTML = html;
    wrapper.style.display = products.length > 0 ? 'block' : 'none';

    // Make first tab active by default
    if (products.length > 0) {
      setActiveProduct(products[0].id);
      onProductChange(products[0].id);
    }
  }

  // Event delegation
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.product-tab');
    if (!tab) return;

    const productId = tab.dataset.product;
    setActiveProduct(productId);
    onProductChange(productId);
  });

  return {
    render,
    setActive: setActiveProduct
  };
}

export function setActiveProduct(productId) {
  document.querySelectorAll('.product-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.product === productId);
  });
}
