export function gasPrice(x) {
  const gasPrice = new Intl.NumberFormat("fa", {
    style: "currency",
    currency: "IRR",
    minimumFractionDigits: 3
  });
  var x = gasPrice.format(x);
  return x;
}