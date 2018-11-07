const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const baconCipher = function (string, length = 5, first = "a", second = "b") {

	length = (length < 5 ? 5 : length);

	numberArray = [];

	for (let i in string) {
		numberArray.push(alphabet.indexOf(string[i]));
	}

	console.log(numberArray);

	binaryArray = [];

	for (let i in numberArray) {
		binaryArray.push(numberArray[i].toString(2));
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

	for (let i in binaryString) {
		if (binaryString[i] === "0") {
			output += first;
		} else {
			output += second;
		}
	}

	console.log(output);
	return output;
}

baconCipher(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);