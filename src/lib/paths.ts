/** Prefix an app path with Astro `base` (e.g. `/noesis-website/`). */
export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
