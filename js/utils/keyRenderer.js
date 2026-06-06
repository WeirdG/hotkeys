// Key combination renderer
// Renders shortcut key strings as styled <kbd> elements

const MODIFIER_KEYS = [
  'Ctrl', 'Cmd', 'Command',
  'Alt', 'Opt', 'Option',
  'Shift', 'Win', 'Windows',
  'Search', 'Fn', 'Ctrl+Shift',
  'Ctrl+Alt', 'Cmd+Opt', 'Cmd+Ctrl',
  'Shift+Alt', 'Shift+Opt', 'Shift+Ctrl',
  'Alt+Shift', 'Opt+Shift', 'Ctrl+Shift',
  'Ctrl+Win', 'Ctrl+Cmd',
  'Alt+Ctrl', 'Opt+Cmd'
];

/**
 * Parse a key string like "Ctrl+Shift+Z" or "Cmd+Opt+N" into segments
 */
function parseKeyString(keyStr) {
  // Handle "or" separators (e.g., "F5 or Ctrl+G")
  if (keyStr.includes(' or ')) {
    const parts = keyStr.split(' or ');
    return parts.map(p => p.trim()).filter(p => p.length > 0);
  }

  // Handle "/" separators for alternatives
  if (keyStr.includes(' / ') && keyStr.length > 10) {
    const parts = keyStr.split(' / ');
    return parts.map(p => p.trim()).filter(p => p.length > 0);
  }

  // Handle "Ctrl+Shift+Arrow" patterns - check for multi-arrow
  if (keyStr.includes('Left/Right') || keyStr.includes('Up/Down')) {
    return [keyStr];
  }

  return [keyStr];
}

/**
 * Normalize macOS key symbols
 */
function normalizeKey(key) {
  const map = {
    'Cmd': '\u2318',  // ⌘
    'Command': '\u2318',
    'Opt': '\u2325',  // ⌥
    'Option': '\u2325',
    'Shift': '\u21E7', // ⇧
    'Ctrl': '\u2303',  // ⌃
    'Control': '\u2303',
    'Alt': 'Alt',
    'Win': '\u229E',  // ⊞
    'Search': '\u{1F50D}', // 🔍
    'Spacebar': '\u2423', // ␣
    'Escape': 'Esc',
    'Return': '\u23CE', // ⏎
    'Enter': '\u23CE',
    'Delete': 'Del',
    'Backspace': '\u232B', // ⌫
    'Tab': '\u21E5', // ⇥
    'Up': '\u2191',  // ↑
    'Down': '\u2193', // ↓
    'Left': '\u2190', // ←
    'Right': '\u2192', // →
    'Home': '\u21F1', // ⇱
    'End': '\u21F2',  // ⇲
    'PgUp': '\u21DE', // ⇞
    'PgDn': '\u21DF', // ⇟
    'Plus': '+',
    'fn': 'Fn'
  };

  return map[key] || key;
}

/**
 * Render a key combination to HTML with <kbd> elements
 * Handles complex strings like "Ctrl+Shift+Left/Right"
 */
export function renderKeys(keyStr) {
  if (!keyStr) return '<span class="key-separator">\u2014</span>';

  const combinations = parseKeyString(keyStr);

  // Show first combination as kbd elements, rest as text with "/" separators
  if (combinations.length > 1) {
    // Render all combinations
    return combinations.map(combo => {
      const parts = combo.split('+').map(p => p.trim());
      return parts.map(part => {
        const normalized = normalizeKey(part);
        const isMod = MODIFIER_KEYS.includes(part) || part.length <= 4 || ['\u2318', '\u2325', '\u21E7', '\u2303', '\u229E', 'Win', 'Alt'].some(s => normalized.includes(s) || normalized === s);
        const cls = isMod ? 'mod' : '';
        return `<kbd class="${cls}">${normalized}</kbd>`;
      }).join('<span class="key-plus">+</span>');
    }).join(' | ');
  }

  const parts = keyStr.split('+').map(p => p.trim());
  return parts.map(part => {
    const normalized = normalizeKey(part);
    const isMod = MODIFIER_KEYS.some(m => part === m) || part.length <= 4;
    const cls = isMod ? 'mod' : '';
    return `<kbd class="${cls}">${normalized}</kbd>`;
  }).join('<span class="key-plus">+</span>');
}

/**
 * Get the platform-specific key string from a shortcut object
 */
export function getKeyForPlatform(shortcut, platform) {
  if (shortcut.keys) return shortcut.keys;

  if (platform === 'macOS' && shortcut.mac) return shortcut.mac;
  if (platform === 'Windows' && shortcut.windows) return shortcut.windows;
  if (platform === 'ChromeOS' && shortcut.chromeos) return shortcut.chromeos;
  if (platform === 'Windows/ChromeOS' && shortcut.windows_chromeos) return shortcut.windows_chromeos;

  // Fallbacks
  return shortcut.mac || shortcut.windows || shortcut.chromeos || shortcut.windows_chromeos || shortcut.keys || '';
}

/**
 * Determine which platform columns to show for a product
 */
export function getPlatformColumns(product) {
  const isCrossPlatform = product.os.includes('Windows') && product.os.includes('macOS') &&
    !product.os.includes('Web');
  const isWeb = product.os.some(o => o.startsWith('Web'));

  if (product.category === 'utility' && (product.id === 'vim' || product.id === 'neovim')) {
    return ['keys'];
  }

  if (product.id === 'blender') {
    return ['keys'];
  }

  if (isWeb) {
    return ['windows_chromeos', 'mac'];
  }

  if (product.os.length === 1 && product.os[0] === 'Windows') {
    return ['windows'];
  }

  if (product.os.length === 1 && product.os[0] === 'macOS') {
    return ['mac'];
  }

  if (product.os.length === 1 && product.os[0] === 'ChromeOS') {
    return ['chromeos'];
  }

  if (isCrossPlatform) {
    return ['windows', 'mac'];
  }

  return ['windows', 'mac'];
}
