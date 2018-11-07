/**
 * This is a command line program that encodes a baconian cipher.
 * Run: node solution.js <numOfLetters> <firstLetter> <secondLetter>
 * Example: node solution.js 5 a b
 */

const generateLetterSubsitutions = (numOfLetters, letters) => {
  const subsitutions = {};
  let code = -1;

  for (let i = 0; i < 26; i++) {
    const alphabet = String.fromCharCode(i + 'A'.charCodeAt(0));
    code++;

    if (alphabet === 'J' || alphabet === 'V') {
      code--;
    }

    let binary = code.toString(2);
    console.log(binary);
    while (binary.length < numOfLetters) {
      binary = '0' + binary;
    }

    const encoded = binary
      .split('')
      .map(digit => letters[digit])
      .join('');

    subsitutions[alphabet] = encoded;
  }

  return subsitutions;
};

const encode = message => {
  return message
    .split('')
    .map(letter => alphabets[letter])
    .join(' ');
};

const numOfLetters = process.argv[2];
const letters = [process.argv[3], process.argv[4]];
const alphabets = generateLetterSubsitutions(numOfLetters, letters);

console.log(alphabets);
console.log(encode('STRIKENOW'));
