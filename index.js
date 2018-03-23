console.log("hello");

console.log( process.argv[2] );

var bacon = {
'A': 'aaaaa',
'B': 'aaaab',
'C': 'aaaba',
'D': 'aaabb',
'E': 'aabaa',
'F': 'aabab',
'G': 'aabba',
'H': 'aabbb',
'I': 'abaaa',
'J': 'abaaa',
'K': 'abaab',
'L': 'ababa',
'M': 'ababb',
'N': 'abbaa',
'O': 'abbab',
'P': 'abbba',
'Q': 'abbbb',
'R': 'baaaa',
'S': 'baaab',
'T': 'baaba',
'U': 'baabb',
'V': 'baabb',
'W': 'babaa',
'X': 'babab',
'Y': 'babba',
'Z': 'babbb'
}

function decodeBacon(baconCode){
	//to split up the user input based on single space
	var words = (baconCode).split('');
	var letters = words.map((w) => w.split(' '));
	// an array for the new encoded letters
	var encoded = [];

	for(var i = 0; i < letters.length; i++){
		encoded[i] = [];
		for(var x = 0; x < letters[i].length; x++){
			if(bacon[letters[i][x]]){
				// push the relevant letters into the encoded array
				encoded[i].push(bacon[letters[i][x]]);
			}
		};
	};

	return encoded.map(arr => arr.join('')).join(' ');
};


var input = process.argv[2];
// caps the user input
var upperCase = input.toUpperCase();
// set a var for the encoded words
var englishCode = decodeBacon(upperCase);


// calling the encoded words
console.log(englishCode);


//Bonus 1
var baconArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

console.log(baconArray);

