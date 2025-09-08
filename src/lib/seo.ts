export const site = {
  name: 'LiftPro',
  url: 'https://example.com',
  locale: 'uk_UA',
  twitter: '@yourbrand'
};

export function title(t?: string) {
  return t ? `${t} — ${site.name}` : site.name;
}
