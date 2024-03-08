export function currencyFormatter(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    notation: 'standard',
    // compactDisplay: "long",
    currency,
  }).format(amount);
}

export function numberFormatter(amount: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
}
