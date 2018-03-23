let userInput = process.argv[2].toLowerCase();
let lengthOfString = process.argv[3];
let firstChar = process.argv[4];
let secondChar = process.argv[5];
let output = "";
const letters = "abcdefghijklmnopqrstuvwxyz";

function textToBinary(char, lengthOfString) {
    //toString(x) converts string to base x
    //padStart(targetLength, character) pads current string with character until it meets targetLength
    return char.toString(2).padStart(lengthOfString, "0");
}

function binaryToChar(binary, zero, one) {
  return binary.split('').map(function(bit) {
    if (bit == '0') {
      return bit = zero;
    } else {
      return bit = one;
    }
  }).join('');
}

function generateBaconianCipher(lengthOfString, first, second) {
  let letterToBaconian = {};
  if (lengthOfString < 5) {
    return "Number of letters must be at least 5";
  }
  for (let i = 0; i < letters.length; i++) {
    letterToBaconian[letters.charAt(i)] = binaryToChar(textToBinary(i, lengthOfString), first, second);
  }
  return letterToBaconian;
}

function encode() {
  const letterToBaconian = generateBaconianCipher(lengthOfString, firstChar, secondChar);
  for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput.charAt(i);
    if (output == " ") {
      output = " ";
    } else {
      output += letterToBaconian[currentChar] + " ";
    }
  }
}

encode();
console.log(output);