// CONVERT PERSIAN & ARABIC NUMBER TO ENGLISH NUMBER

var persianNumber = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
var arabicNumber = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export function fixNumbers(str) {
  if (typeof str === 'string') {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumber[i], i).replace(arabicNumber[i], i);
    }
    console.log(str)
  }
  return str;
};












