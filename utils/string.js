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
