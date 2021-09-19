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