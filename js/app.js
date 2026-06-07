// Main Application
// Keyboard Shortcuts Reference Website

import { products, getProductById, getProductsByCategory, searchShortcuts } from './data.js?v=16';
import { createCategoryNav, setActiveCategory } from './components/categoryNav.js';
import { createProductTabs, setActiveProduct } from './components/tabBar.js';
import { createSearchBar } from './components/searchBar.js';
import { createShortcutTable } from './components/shortcutTable.js';
import { initTooltips } from './utils/tooltip.js';

class App {
  constructor() {
    this.state = {
      activeCategory: 'os',
      activeProduct: null,
      searchQuery: '',
      searchAll: false
    };

    this.init();
  }

  init() {
    // Handle hash-based routing
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const product = getProductById(hash);
      if (product) {
        this.state.activeCategory = product.category;
        this.state.activeProduct = product.id;
      }
    }

    // Set default product if none from hash
    if (!this.state.activeProduct) {
      const firstProducts = getProductsByCategory(this.state.activeCategory);
      if (firstProducts.length > 0) {
        this.state.activeProduct = firstProducts[0].id;
      }
    }

    // Create shortcut table
    const shortcutTable = createShortcutTable();

    // Create product tabs
    const productTabs = createProductTabs({
      onProductChange: (productId) => {
        this.state.activeProduct = productId;
        this.state.searchQuery = '';
        window.location.hash = '#' + productId;
        this.renderProduct(shortcutTable);
      }
    });

    // Create category nav
    const categoryNav = createCategoryNav({
      onCategoryChange: (categoryId) => {
        this.state.activeCategory = categoryId;
        this.state.searchQuery = '';
        this.resetSearch();

        const newProducts = getProductsByCategory(categoryId);
        if (newProducts.length > 0) {
          this.state.activeProduct = newProducts[0].id;
          window.location.hash = '#' + newProducts[0].id;
        }

        productTabs.render(categoryId);
        this.renderProduct(shortcutTable);
      }
    });

    // Create search bar
    const searchBar = createSearchBar({
      onSearch: (query) => {
        this.state.searchQuery = query;
        this.renderProduct(shortcutTable);
      },
      onSearchAllToggle: (searchAll) => {
        this.state.searchAll = searchAll;
        this.renderProduct(shortcutTable);
      }
    });

    // Initial render
    setActiveCategory(this.state.activeCategory);
    productTabs.render(this.state.activeCategory);
    setActiveProduct(this.state.activeProduct);
    this.renderProduct(shortcutTable);

    // Hash change listener
    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '');
      const product = getProductById(newHash);
      if (product) {
        if (product.category !== this.state.activeCategory) {
          this.state.activeCategory = product.category;
          setActiveCategory(product.category);
          productTabs.render(product.category);
        }
        this.state.activeProduct = product.id;
        setActiveProduct(product.id);
        this.state.searchQuery = '';
        this.resetSearch();
        this.renderProduct(shortcutTable);
      }
    });

    // Keyboard navigation for tabs
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return; // Don't interfere with search

      // Arrow keys navigate between product tabs
      if (e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const currentProduct = getProductById(this.state.activeProduct);
        if (!currentProduct) return;
        const siblings = getProductsByCategory(currentProduct.category);
        const currentIdx = siblings.findIndex(p => p.id === currentProduct.id);
        let newIdx = e.key === 'ArrowRight' ? currentIdx + 1 : currentIdx - 1;
        if (newIdx >= siblings.length) {
          // Move to next category
          const catIds = Object.keys({ os: true, browsers: true, utility: true, productivity: true });
          const catIdx = catIds.indexOf(currentProduct.category);
          if (catIdx < catIds.length - 1) {
            const nextProducts = getProductsByCategory(catIds[catIdx + 1]);
            if (nextProducts.length > 0) {
              this.state.activeCategory = catIds[catIdx + 1];
              setActiveCategory(this.state.activeCategory);
              document.getElementById('productTabs').dispatchEvent(new Event('categoryChange'));
              // Reset product tabs render
              const newProdTabs = getProductsByCategory(this.state.activeCategory);
              if (newProdTabs.length > 0) {
                newIdx = 0;
                this.state.activeProduct = newProdTabs[0].id;
                setActiveProduct(newProdTabs[0].id);
                window.location.hash = '#' + newProdTabs[0].id;
                this.renderProduct(shortcutTable);
              }
            }
          }
          return;
        }
        if (newIdx < 0) {
          const catIds = Object.keys({ os: true, browsers: true, utility: true, productivity: true });
          const catIdx = catIds.indexOf(currentProduct.category);
          if (catIdx > 0) {
            const prevProducts = getProductsByCategory(catIds[catIdx - 1]);
            if (prevProducts.length > 0) {
              this.state.activeCategory = catIds[catIdx - 1];
              setActiveCategory(this.state.activeCategory);
              const newProdTabs = getProductsByCategory(this.state.activeCategory);
              if (newProdTabs.length > 0) {
                newIdx = newProdTabs.length - 1;
                this.state.activeProduct = newProdTabs[newIdx].id;
                setActiveProduct(newProdTabs[newIdx].id);
                window.location.hash = '#' + newProdTabs[newIdx].id;
                this.renderProduct(shortcutTable);
              }
            }
          }
          return;
        }
        this.state.activeProduct = siblings[newIdx].id;
        setActiveProduct(siblings[newIdx].id);
        window.location.hash = '#' + siblings[newIdx].id;
        this.renderProduct(shortcutTable);
      }
    });

    // Initialize floating key tooltips (avoids CSS overflow clipping)
    initTooltips();
  }

  renderProduct(shortcutTable) {
    const product = getProductById(this.state.activeProduct);
    if (!product) return;

    shortcutTable.render(product, this.state.searchQuery);
  }

  resetSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    const count = document.getElementById('searchResultCount');
    const toggle = document.getElementById('searchAllToggle');
    if (input) input.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (count) count.textContent = '';
    if (toggle) toggle.style.display = 'none';
  }
}

// Theme toggle
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  // Check saved preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(toggle, savedTheme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(toggle, next);
  });
}

function updateThemeIcon(button, theme) {
  const isDark = theme === 'dark';
  button.innerHTML = isDark
    ? '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>'
    : '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>';
  button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  new App();
});
