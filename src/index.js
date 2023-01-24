module.exports = function toReadable (number) {
  if (number >= 0 && number < 20) {
    return from1to19 (number);
  }
  if (number >= 20 && number < 100) {
    if (number % 10 === 0) {
      return from20to99DozensFull (number)
    } else 
      return from20to99Dozens (number);
  }
  if (number >= 100 && number < 1000) {
    if (number % 100 === 0) {
      return from100to990HundredsFull (number)
    } else 
      return from20to990Hundreds (number);
  }
}

function from1to19 (last) {
  switch (last) {
    case 0:
      return 'zero';
    case 1: 
      return 'one';
    case 2:  
      return 'two';
    case 3: 
      return 'three';
    case 4: 
      return 'four';
    case 5: 
      return 'five';
    case 6: 
      return 'six';
    case 7:
      return 'seven';
    case 8: 
      return 'eight';
    case 9: 
      return 'nine';
    case 10: 
      return 'ten';
    case 11: 
      return 'eleven';
    case 12: 
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14: 
      return 'fourteen';
    case 15: 
      return 'fifteen';
    case 16: 
      return 'sixteen';
    case 17: 
      return 'seventeen';
    case 18: 
      return 'eighteen';
    case 19: 
      return 'nineteen';
  }
}

function from20to99DozensFull (middle) {
  switch (middle) {
    case 20: 
      return 'twenty';
    case 30: 
      return 'thirty';
    case 40:  
      return 'forty';
    case 50: 
      return 'fifty';
    case 60: 
      return 'sixty';
    case 70: 
      return 'seventy';
    case 80: 
      return 'eighty';
    case 90:
      return 'ninety';
  }
}
function from20to99Dozens (middle) {
  let dozens = Math.floor(middle / 10) * 10;
  let numbers = middle % 10;
  return (from20to99DozensFull (dozens) + " " + from1to19 (numbers));
}

function from100to990HundredsFull (first) {
  let hundreds = Math.floor(first / 100);
  return (from1to19 (hundreds) + " " + "hundred");
}

function from20to990Hundreds (first) {
  let hundreds = Math.floor(first / 100);
  let dozens = first % 100;
  if (dozens >= 0 && dozens < 20) {
    return (from1to19 (hundreds) + " " + "hundred " + from1to19 (dozens));;
  }
  if (dozens >= 20 && dozens < 100) {
    if (dozens % 10 === 0) {
      return (from1to19 (hundreds) + " " + "hundred " + from20to99DozensFull (dozens));
    } else 
      return (from1to19 (hundreds) + " " + "hundred " + from20to99Dozens (dozens));
  }
}