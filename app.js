const alphaString = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = alphaString.split('');

const convertBase = function (number, base) {
	output = "";

	output += number % base;
	number -= number % base;

	while (number / base >= 1) {
		number = number / base;

		output = (number % base) + output;
		number -= number % base;
	}

	if (number > 0) {
		output = (number % base) + output;
	}

	return output;
}

const baconCipher = function (string, length = 5, base = 2, cipher = alphaString) {

	base = (base < 2 ? 2 : base); // can't do anything below base 2
	
	var minLength = 1;
	var minLengthBaseCalc = base;

	// calculates minimum length varying on base
	while (minLengthBaseCalc < 26) {
		minLengthBaseCalc = minLengthBaseCalc * base;
		minLength += 1;
	}

	// prevents cipher length from being not enough to reach the end of the alphabet
	length = (length < minLength ? minLength : length); 

	// defaults to alphabet if provided cipher is shorter than base
	if (cipher.length < base) {
		cipher = alphaString;
	}

	numberArray = [];

	for (let i in string) {
		numberArray.push(alphabet.indexOf(string[i]));
	}

	console.log(numberArray);

	binaryArray = [];

	for (let i in numberArray) {
		binaryArray.push(convertBase(numberArray[i], base));
	}

	console.log(binaryArray);

	for (let i in binaryArray) {
		while (binaryArray[i].length < length) {
			binaryArray[i] = "0" + binaryArray[i];
		}
	}
	
	console.log(binaryArray);
	
	binaryString = binaryArray.join("");

	console.log(binaryString);

	output = "";

	cipher = cipher.split('');

	for (let i in binaryString) {
		output += cipher[binaryString[i]]
	}

	console.log(output);
	return output;
}

baconCipher(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);