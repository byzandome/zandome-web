// eslint-disable-next-line no-unused-vars
type URLGenerator = (id: string) => string;

const PLATFORM_BASE_URLS: Record<string, URLGenerator> = {
  Platzi: (id) => `https://platzi.com/p/zandome/curso/${id}/diploma/detalle/`,
  Udemy: (id) => `https://www.udemy.com/certificate/${id}/`,
};

export function getCertificateUrl(platform: string, urlId: string): string {
  return PLATFORM_BASE_URLS[platform]?.(urlId) ?? urlId;
}
