module.exports = function toReadable(number) {
const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
  'ninety'];
  
  let result = number.toString();
  
  
  if (number === 0) {
    return 'zero';  
  } 
  
  
    if (number < 20) {
      return digits[number];
    }
  
    if (result.length === 2) {
      resultTrim = dozens[result[0]] + ' ' + digits[result[1]];
     return resultTrim.trim();
    }
  
    if (result.length == 3) {
      if (result[1] === '0' && result[2] === '0')
        return digits[result[0]] + ' hundred';
      else
        return digits[result[0]] + ' hundred ' + toReadable(+(result[1] + result[2]));
    }
  }



 
  
 
 

