/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative to clsx for combining Tailwind classes.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
