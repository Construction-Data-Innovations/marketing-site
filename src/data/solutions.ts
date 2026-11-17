// Single source for the Solutions mega menu and the Solutions page.
// Keep this to the 10 most important features, not the full help center.
// Product proper nouns listed in TRADEMARKS render with a superscript ™ via tm().

// Product names that carry a ™ wherever tm() renders them.
// Not trademarked: AI Chat, AI Insights, and the PDF/Excel export (which has no product name).
export const TRADEMARKS = ['Data Hub', 'Blocks', 'Chance of anything'];

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Returns HTML with a superscript ™ after each trademarked product name. */
export function tm(text: string): string {
  let html = escapeHtml(text);
  for (const mark of TRADEMARKS) {
    html = html.split(escapeHtml(mark)).join(`${escapeHtml(mark)}<sup class="tm">™</sup>`);
  }
  return html;
}

export interface Feature {
  id: string; // anchor on /solutions
  name: string;
  desc: string;
  icon: string; // inner SVG markup, 24x24 viewBox, stroke icons
  badge?: string;
}

const I = {
  sheet: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  diff: '<path d="M8 3v12M8 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 7v4a4 4 0 0 1-4 4H8"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  level: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  check: '<path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  blocks: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/><path d="M9 11h6M9 14h4"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  group: '<path d="M3 6h18M7 12h14M11 18h10"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="8" cy="18" r="1" fill="currentColor"/>',
  map: '<path d="M4 7h7M4 12h7M4 17h7"/><path d="M15 7h5M15 12h5M15 17h5"/><path d="M11 7l4 5-4 5"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  library: '<path d="M4 19V5a2 2 0 0 1 2-2h3v18H6a2 2 0 0 1-2-2zM9 3h4v18H9zM15.5 4.2l3.8-1 3.2 16.4-3.8 1z"/>',
  xl: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
};

export const features: Feature[] = [
  { id: 'ai-cost-generation', name: 'AI cost generation', desc: 'Reads your drawings, extracts the data, and generates quantities and pricing.', icon: I.sheet },
  { id: 'ai-chat', name: 'AI Chat', desc: 'Edit your estimate in plain English, build custom reports, and dig deep into your bids, drawings, and costs.', icon: I.chat },
  { id: 'custom-actions', name: 'Custom actions', desc: 'Build an analysis once, share it with your team, and run it in one click.', icon: I.bolt },
  { id: 'data-hub', name: 'Data Hub', desc: 'Your cost history, Items of Work, and Bid Performance in one place.', icon: I.db },
  { id: 'pricing-libraries', name: 'Pricing libraries', desc: 'Current pricing you control, not a stale price book.', icon: I.library, badge: 'Podium+' },
  { id: 'blocks', name: 'Blocks', desc: 'Line items and assemblies you build once and reuse on every bid.', icon: I.blocks, badge: 'Podium+' },
  { id: 'cost-code-mapping', name: 'Cost code mapping', desc: 'Your custom cost codes, mapped to CSI and Uniformat for you.', icon: I.map, badge: 'Podium+' },
  { id: 'ai-insights', name: 'AI Insights', desc: 'Flags inconsistencies and runs your own checks on every bid.', icon: I.check, badge: 'Podium+' },
  { id: 'scenarios', name: 'Scenarios', desc: 'Price alternates and value-engineering options side by side, before you commit to a number.', icon: I.diff },
  { id: 'export', name: 'PDF & Excel export', desc: 'Polished PDF proposals and Excel with live formulas, in your template.', icon: I.xl },
];
