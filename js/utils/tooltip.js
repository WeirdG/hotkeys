// Floating tooltip for kbd key elements
// Rendered at body level to avoid CSS overflow clipping from table/scroll containers

let tooltipEl = null;
let activeTarget = null;

function ensureTooltip() {
  if (tooltipEl) return;
  tooltipEl = document.createElement('div');
  tooltipEl.className = 'kb-tooltip';
  tooltipEl.setAttribute('role', 'tooltip');
  tooltipEl.setAttribute('aria-hidden', 'true');
  document.body.appendChild(tooltipEl);
}

function positionTooltip(target) {
  const rect = target.getBoundingClientRect();
  const tip = tooltipEl;

  // Position above the key
  const top = rect.top - tip.offsetHeight - 8 + window.scrollY;
  const left = rect.left + rect.width / 2 - tip.offsetWidth / 2 + window.scrollX;

  // Keep tooltip within viewport bounds
  const vw = window.innerWidth;
  let finalLeft = Math.max(8, Math.min(left, vw - tip.offsetWidth - 8));

  tip.style.top = top + 'px';
  tip.style.left = finalLeft + 'px';
  tip.classList.add('visible');
}

function showTooltip(e) {
  const target = e.target.closest('kbd[data-tip]');
  if (!target) return;

  activeTarget = target;
  ensureTooltip();
  tooltipEl.textContent = target.dataset.tip;
  positionTooltip(target);
}

function hideTooltip(e) {
  // Only hide if we're actually leaving the kbd (not moving to its child)
  const target = e.target.closest('kbd[data-tip]');
  if (target && target === activeTarget && !target.contains(e.relatedTarget)) {
    activeTarget = null;
    if (tooltipEl) {
      tooltipEl.classList.remove('visible');
    }
  }
  // If leaving the kbd entirely
  if (!target && activeTarget) {
    // Check if we entered the tooltip itself
    if (e.relatedTarget && e.relatedTarget.closest('.kb-tooltip')) return;
    activeTarget = null;
    if (tooltipEl) {
      tooltipEl.classList.remove('visible');
    }
  }
}

function hideTooltipFromTooltip(e) {
  if (e.relatedTarget && e.relatedTarget.closest('kbd[data-tip]')) return;
  activeTarget = null;
  if (tooltipEl) {
    tooltipEl.classList.remove('visible');
  }
}

/**
 * Initialize keyboard key tooltips.
 * Attaches delegated event listeners to the shortcuts content area.
 */
export function initTooltips() {
  ensureTooltip();

  // Use event delegation on the shortcuts container
  const container = document.getElementById('shortcutsContent');

  container.addEventListener('mouseenter', showTooltip, { passive: true, capture: true });
  container.addEventListener('mouseleave', hideTooltip, { passive: true, capture: true });

  // Also handle the tooltip element itself
  tooltipEl.addEventListener('mouseleave', hideTooltipFromTooltip);

  // Reposition on scroll/resize
  window.addEventListener('scroll', () => {
    if (activeTarget) positionTooltip(activeTarget);
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (activeTarget) positionTooltip(activeTarget);
  }, { passive: true });
}
