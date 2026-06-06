// Shortcut Table Component

import { searchShortcuts, getProductById } from '../data.js?v=8';
import { renderKeys, getPlatformColumns, getKeyForPlatform } from '../utils/keyRenderer.js';
import { highlightMatches, escapeHtml } from '../utils/fuzzySearch.js';

export function createShortcutTable() {
  const container = document.getElementById('shortcutsContent');

  const collapsedCategories = new Set();

  function render(product, searchQuery = '') {
    if (!product) {
      container.innerHTML = '';
      return;
    }

    const platformCols = getPlatformColumns(product);
    const isSingleColumn = platformCols.length === 1;

    // Platform column headers
    const getPlatformLabel = (col) => {
      const map = {
        windows: 'Windows',
        mac: 'macOS',
        chromeos: 'ChromeOS',
        windows_chromeos: 'Windows / ChromeOS',
        keys: 'Keys'
      };
      return map[col] || col;
    };

    // Check for search results
    let searchResults = null;
    let searchActive = false;

    if (searchQuery && searchQuery.length >= 2) {
      searchResults = searchShortcuts(searchQuery, [product.id]);
      searchActive = true;
    }

    // Build header
    const headerHtml = `
      <div class="product-info">
        <div class="product-info-header">
          <div class="product-icon-large">
            ${product.icon || ''}
          </div>
          <h1 class="product-name">${product.name}</h1>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="os-badges">
          ${product.os.map(os => `<span class="os-badge">${os}</span>`).join('')}
        </div>
      </div>
    `;

    // If searching and no results
    if (searchActive && (!searchResults || searchResults.length === 0)) {
      container.innerHTML = headerHtml + `
        <div class="no-results">
          <div class="no-results-icon">\uD83D\uDD0D</div>
          <div class="no-results-title">No shortcuts found for "${escapeHtml(searchQuery)}"</div>
          <div class="no-results-hint">Try a different search term or click "Search all products" to broaden results.</div>
        </div>
      `;
      return;
    }

    // Build category sections
    let categoriesHtml = '';
    const categories = searchActive
      ? groupSearchResults(searchResults)
      : product.shortcuts;

    for (const [catName, shortcuts] of Object.entries(categories)) {
      const catId = catName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const isCollapsed = collapsedCategories.has(catId);
      const count = Array.isArray(shortcuts) ? shortcuts.length : 0;

      categoriesHtml += `
        <div class="shortcut-category">
          <div class="category-header" data-category="${catId}">
            <h2 class="category-title">${catName}</h2>
            <span class="category-count">${count}</span>
            <svg class="category-toggle ${isCollapsed ? 'collapsed' : ''}" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 8l4 4 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="category-body ${isCollapsed ? 'collapsed' : ''}" style="max-height: ${isCollapsed ? '0' : '2000px'}">
            <div class="shortcut-table-wrapper">
              <table class="shortcut-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    ${isSingleColumn ? `<th>${getPlatformLabel(platformCols[0])}</th>`
                      : platformCols.map(col => `<th>${getPlatformLabel(col)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${Array.isArray(shortcuts) ? shortcuts.map(sc => renderShortcutRow(sc, product, platformCols, isSingleColumn, searchQuery)).join('') : ''}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = headerHtml + categoriesHtml;

    // Bind category toggle
    container.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => {
        const catId = header.dataset.category;
        const body = header.nextElementSibling;
        const toggle = header.querySelector('.category-toggle');

        if (collapsedCategories.has(catId)) {
          collapsedCategories.delete(catId);
          body.classList.remove('collapsed');
          body.style.maxHeight = body.scrollHeight + 'px';
          toggle.classList.remove('collapsed');
        } else {
          collapsedCategories.add(catId);
          body.style.maxHeight = body.scrollHeight + 'px';
          requestAnimationFrame(() => {
            body.classList.add('collapsed');
            body.style.maxHeight = '0';
          });
          toggle.classList.add('collapsed');
        }
      });
    });
  }

  function renderShortcutRow(shortcut, product, platformCols, isSingleColumn, searchQuery) {
    let rowClass = '';
    let actionHtml = escapeHtml(shortcut.action);

    // Highlight matches
    if (searchQuery && searchQuery.length >= 2) {
      const actionLower = shortcut.action.toLowerCase();
      const queryLower = searchQuery.toLowerCase();
      if (actionLower.includes(queryLower)) {
        rowClass = ' highlight';
        actionHtml = highlightMatches(escapeHtml(shortcut.action), queryLower);
      } else {
        // Check key strings
        for (const col of platformCols) {
          const keyVal = getKeyForPlatform(shortcut, col === 'mac' ? 'macOS' : col);
          if (keyVal && keyVal.toLowerCase().includes(queryLower)) {
            rowClass = ' highlight';
            break;
          }
        }
      }
    }

    if (isSingleColumn) {
      const col = platformCols[0];
      const keyVal = col === 'keys'
        ? shortcut.keys || ''
        : getKeyForPlatform(shortcut, col === 'mac' ? 'macOS' : col === 'windows_chromeos' ? 'Windows/ChromeOS' : col);
      const keyHtml = keyVal ? renderKeys(keyVal) : '<span class="key-separator">\u2014</span>';

      return `
        <tr class="${rowClass}">
          <td class="action-cell">${actionHtml}</td>
          <td class="key-cell">${keyHtml}</td>
        </tr>
      `;
    }

    // Multi-column
    let cellsHtml = platformCols.map(col => {
      const platformName = col === 'mac' ? 'macOS' : col === 'windows_chromeos' ? 'Windows/ChromeOS' : col;
      const keyVal = getKeyForPlatform(shortcut, platformName);
      const keyHtml = keyVal ? renderKeys(keyVal) : '<span class="key-separator">\u2014</span>';
      return `<td class="key-cell">${keyHtml}</td>`;
    }).join('');

    return `
      <tr class="${rowClass}">
        <td class="action-cell">${actionHtml}</td>
        ${cellsHtml}
      </tr>
    `;
  }

  function groupSearchResults(results) {
    if (!results) return {};
    const grouped = {};
    for (const r of results) {
      if (!grouped[r.categoryName]) grouped[r.categoryName] = [];
      grouped[r.categoryName].push(r.shortcut);
    }
    return grouped;
  }

  return { render };
}
