export function formatNumberWithCommas(num: number | string): string {
  if (num === null || num === undefined) return '';
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
