// Category Navigation Component

import { CATEGORIES, getProductsByCategory } from '../data.js?v=8';

export function createCategoryNav({ onCategoryChange }) {
  const container = document.getElementById('categoryNav');

  const tabs = Object.values(CATEGORIES).map(cat => {
    const count = getProductsByCategory(cat.id).length;
    return `
      <button class="category-tab" data-category="${cat.id}" aria-label="${cat.name} (${count} products)">
        <span>${cat.shortName || cat.name}</span>
        <span class="count">${count}</span>
      </button>
    `;
  });

  container.innerHTML = tabs.join('');

  // Event delegation
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tab');
    if (!tab) return;

    const categoryId = tab.dataset.category;
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  });

  return {
    setActive: setActiveCategory
  };
}

export function setActiveCategory(categoryId) {
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryId);
  });
}
