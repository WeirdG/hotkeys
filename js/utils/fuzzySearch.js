// Fuzzy matching utility for search

/**
 * Simple score: exact match > starts with > contains
 * Returns a score (higher = better match)
 */
export function matchScore(text, query) {
  const t = text.toLowerCase();
  const q = query.toLowerCase();

  if (t === q) return 100;
  if (t.startsWith(q)) return 80;
  if (t.includes(q)) return 50;

  // Fuzzy: check if all query characters appear in order
  let qi = 0;
  let score = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      qi++;
      score += ti === qi - 1 ? 10 : 5; // consecutive = higher
    }
  }
  if (qi === q.length) return score;

  // Check individual tokens
  const tokens = q.split(/\s+/);
  let tokenScore = 0;
  for (const token of tokens) {
    if (t.includes(token)) tokenScore += 15;
  }
  return tokenScore;
}

/**
 * Highlight matching text by wrapping matches in <mark> tags
 */
export function highlightMatches(text, query) {
  if (!query || query.length < 1) return text;

  const q = query.toLowerCase();
  const lc = text.toLowerCase();
  const pos = lc.indexOf(q);

  if (pos === -1) return text;

  return text.substring(0, pos) +
    '<span class="match-highlight">' +
    text.substring(pos, pos + query.length) +
    '</span>' +
    text.substring(pos + query.length);
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
