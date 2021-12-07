// 1
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


// 2
export function convertCalender() {
  const isoString = new Date().toISOString();
  const date = new Date(isoString);
return(
    new Intl.DateTimeFormat("fa", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(date)
  );



  // const faDateTime = new Intl.DateTimeFormat("fa", {
  //   year: "2-digit",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZoneName: "short"
  // }).format;
  // const now = Date.now();
  // console.log(faDateTime(now));


  // const faTime = new Intl.DateTimeFormat("fa", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZoneName: "short",
  //   timeZone: "UTC"
  // });
  // const now = Date.now();
  // console.log(faTime.format(now));

  // const date = new Date(Date.UTC(2021, 8, 8, 3, 0, 0, 200));
  // const faDate = new Intl.DateTimeFormat("fa", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric"
  // }).format(date);
  // console.log(faDate);


  // const rtf = new Intl.RelativeTimeFormat("en", {
  //   localeMatcher: "best fit", // other values: "lookup"
  //   numeric: "always", // other values: "auto"
  //   style: "long", // other values: "short" or "narrow"
  // });
  // console.log(rtf.format(-1, "day"));
  // console.log(rtf.format(1, "day"));
}


// 3
// CONVERT ENGLISH NUMBER TO PERSIAN NUMBER

export function enToFaDigits (input , x) {
  if (input == undefined)
      return;
  var returnModel = "", symbolMap = {
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹',
      '0': '۰'
  };
  input = input.toString();
  for (var i = 0; i < input.length; i++)
      if (symbolMap[input[i]])
          returnModel += symbolMap[input[i]];
      else
          returnModel += input[i];
         
      
  return returnModel;
  
};

// Another code
// console.log(new Intl.NumberFormat("fa").format(123456));


// 4
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

// 5
export function faPercent (x) {
  const faPercent = new Intl.NumberFormat("fa", {
    style: "percent",
    minimumFractionDigits: 3
  }).format;
  return(faPercent(x));
}

// 6
// CONVERT PERSIAN NUMBER TO ENGLISH NUMBER

export function faToEnDigits(input) {
  if (input == undefined)
    return;
  var returnModel = "", symbolMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
  };
  input = input.toString();
  for (var i = 0; i < input.length; i++)
    if (symbolMap[input[i]])
      returnModel += symbolMap[input[i]];
    else
console.log(input)
      returnModel += input[i];
  return returnModel;
}

// 7
export function gasPrice(x) {
  const gasPrice = new Intl.NumberFormat("fa", {
    style: "currency",
    currency: "IRR",
    minimumFractionDigits: 3
  });
  var x = gasPrice.format(x);
  return x;
}

// 8
export function persianDecimal  (x) {
  const persianDecimal = new Intl.NumberFormat("fa", {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 2
  });
  return(persianDecimal.format(x));
}

// 9
export function toFarsiNumber(n) {
  if (n) {
      const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  } else return "";
}

const persianNumber = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];

const arabicNumber = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export function fixNumbers(str) {
  if (typeof str === "string") {
      for (let i = 0; i < 10; i++) {
          str = str.replace(persianNumber[i], i).replace(arabicNumber[i], i);
      }
  }
  return str;
}

export function numberWithCommas(x) {
  x = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

export function persianNumbers(num) {
  const num_dic = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
  };
  return parseInt(
      num.replace(/[۰-۹]/g, function (w) {
          return num_dic[w];
      })
  );
}



















