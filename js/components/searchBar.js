// Search Bar Component

import { searchShortcuts } from '../data.js?v=6';
import { highlightMatches } from '../utils/fuzzySearch.js';

export function createSearchBar({ onSearch, onSearchAllToggle }) {
  const container = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  const searchAllToggle = document.getElementById('searchAllToggle');
  const resultCount = document.getElementById('searchResultCount');

  let searchAll = false;
  let debounceTimer = null;

  // Input event with debounce
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();
      handleSearch(query);
    }, 250);
  });

  // Clear button
  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.add('hidden');
    resultCount.textContent = '';
    searchAllToggle.style.display = 'none';
    onSearch('');
  });

  // Search all toggle
  searchAllToggle.addEventListener('click', () => {
    searchAll = !searchAll;
    searchAllToggle.textContent = searchAll ? 'Show current product only' : 'Search all products';
    const query = input.value.trim();
    handleSearch(query);
    if (onSearchAllToggle) onSearchAllToggle(searchAll);
  });

  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      input.focus();
    }
    if (e.key === 'Escape' && document.activeElement === input) {
      input.value = '';
      clearBtn.classList.add('hidden');
      input.blur();
      onSearch('');
    }
  });

  function handleSearch(query) {
    if (query.length < 2) {
      clearBtn.classList.add('hidden');
      resultCount.textContent = '';
      searchAllToggle.style.display = 'none';
      onSearch('');
      return;
    }

    clearBtn.classList.remove('hidden');
    searchAllToggle.style.display = 'inline-block';

    const results = searchShortcuts(query);
    resultCount.textContent = results.length > 0
      ? `${results.length} match${results.length > 1 ? 'es' : ''} across ${new Set(results.map(r => r.product.id)).size} product${new Set(results.map(r => r.product.id)).size > 1 ? 's' : ''}`
      : 'No matches';

    onSearch(query, searchAll ? null : null);
  }

  return {
    getQuery: () => input.value.trim(),
    isSearchAll: () => searchAll,
    focus: () => input.focus()
  };
}
