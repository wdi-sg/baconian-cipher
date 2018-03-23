let preCodeWord = ""
let postCodeWord = ""

for(var b = 2; b < process.argv.length; b++){
	let inputWord = process.argv[b];

	for(var i = 0; i < inputWord.length ; i++){
		preCodeWord += inputWord.charAt(i).toUpperCase() + " "

		for (var a = 0; a < 26; a++){
			let codes = {
				"A" : "aaaaa", 
				"B" : "aaaab",
				"C" : "aaaba",    
				"D" : "aaabb",
				"E" : "aabaa",    
				"F" : "aabab",    
				"G" : "aabba",
				"H" : "aabbb", 
				"I" : "abaaa",
				"J" : "bbbaa",
				"K" : "abaab",
				"L" : "ababa",
				"M" : "ababb",
				"N" : "abbaa",
				"O" : "abbab",
				"P" : "abbba",
				"Q" : "abbbb",
				"R" : "baaaa",
				"S" : "baaab",
				"T" : "baaba",
				"U" : "baabb",
				"V" : "bbaab",
				"W" : "babaa",
				"X" : "babab",
				"Y" : "babba",
				"Z" : "babbb"
			}

			if(inputWord.charAt(i).toUpperCase() === Object.keys(codes)[a]) {
				postCodeWord += codes[inputWord.charAt(i).toUpperCase()] + " "
			}
		}
	}
}
console.log(preCodeWord);
console.log(postCodeWord);