export function persianDecimal  (x) {
  const persianDecimal = new Intl.NumberFormat("fa", {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 2
  });
  return(persianDecimal.format(x));
}
