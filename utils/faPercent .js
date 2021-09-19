export function faPercent (x) {
  const faPercent = new Intl.NumberFormat("fa", {
    style: "percent",
    minimumFractionDigits: 3
  }).format;
  return(faPercent(x));
}
