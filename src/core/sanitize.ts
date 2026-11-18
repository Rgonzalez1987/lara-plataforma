import DOMPurify from 'dompurify';

const ALLOWED_TAGS = ['b', 'i', 'u', 'br', 'sup', 'sub', 'strong', 'em', 'span'];

/**
 * Escapa texto plano para insertarlo de forma segura sin interpretar HTML.
 */
export function escapeHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sanitiza HTML pedagógico limitado (mismas etiquetas permitidas que tools/build.js).
 */
export function sanitizePedagogicalHtml(dirtyHtml: string): string {
  return DOMPurify.sanitize(dirtyHtml, {
    ALLOWED_TAGS,
    ALLOWED_ATTR: ['class'],
  });
}

/**
 * Asigna texto seguro a un elemento DOM sin riesgo de XSS.
 */
export function setSafeText(el: Element | null, text: unknown): void {
  if (el) {
    el.textContent = String(text ?? '');
  }
}
