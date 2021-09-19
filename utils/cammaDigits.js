
export function numberWithCommas(x) {
  //  x = x.toString();
  // var pattern=/(-?\d+)(\d{3})/;  
  // while (pattern.test(x)) x=x.replace(pattern,"$1 ,$2");   
  // return x;

  return(new Intl.NumberFormat("fa").format(x));
}






// export function numberWithCommas(x) {
//   var parts = x.toString().split(".");
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   return parts.join(".");
// }





// export function numberWithCommas(x) {
//    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
