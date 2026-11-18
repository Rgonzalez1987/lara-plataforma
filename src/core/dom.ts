export type ChildNodeInput = Node | string | number | null | undefined | false;

export interface ElementOptions {
  className?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  htmlFor?: string;
  onClick?: (e: MouseEvent) => void;
  onSubmit?: (e: SubmitEvent) => void;
}

/**
 * Crea elementos DOM de forma segura usando textContent para strings
 * (evita inyección HTML/XSS).
 */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  opts: ElementOptions = {},
  ...children: ChildNodeInput[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);

  if (opts.className) node.className = opts.className;
  if (opts.id) node.id = opts.id;
  if (opts.disabled !== undefined && 'disabled' in node) {
    (node as HTMLButtonElement | HTMLInputElement).disabled = opts.disabled;
  }
  if (opts.required !== undefined && 'required' in node) {
    (node as HTMLInputElement).required = opts.required;
  }
  if (opts.type && 'type' in node) {
    (node as HTMLInputElement | HTMLButtonElement).type = opts.type;
  }
  if (opts.placeholder && 'placeholder' in node) {
    (node as HTMLInputElement).placeholder = opts.placeholder;
  }
  if (opts.value !== undefined && 'value' in node) {
    (node as HTMLInputElement).value = opts.value;
  }
  if (opts.minLength !== undefined && 'minLength' in node) {
    (node as HTMLInputElement).minLength = opts.minLength;
  }
  if (opts.maxLength !== undefined && 'maxLength' in node) {
    (node as HTMLInputElement).maxLength = opts.maxLength;
  }
  if (opts.htmlFor && node instanceof HTMLLabelElement) {
    node.htmlFor = opts.htmlFor;
  }
  if (opts.onClick) {
    const handler = opts.onClick;
    node.addEventListener('click', (e) => handler(e as MouseEvent));
  }
  if (opts.onSubmit) {
    const handler = opts.onSubmit;
    node.addEventListener('submit', (e) => handler(e as SubmitEvent));
  }

  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    if (typeof child === 'string' || typeof child === 'number') {
      node.appendChild(document.createTextNode(String(child)));
    } else {
      node.appendChild(child);
    }
  }

  return node;
}
