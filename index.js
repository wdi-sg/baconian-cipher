/**
 * ===================================
 * Bacon Encoder/Decoder
 * ===================================
 */
const bacon_library = {
	a: "aaaaa",
	b: "aaaab",
	c: "aaaba",
	d: "aaabb",
	e: "aabaa",
	f: "aabab",
	g: "aabba",
	h: "aabbb",
	i: "abaaa",
	j: "abaaa",
	k: "abaab",
	l: "ababb",
	m: "ababb",
	n: "abbaa",
	o: "abbab",
	p: "abbba",
	q: "abbbb",
	r: "baaaa",
	s: "baaab",
	t: "baaba",
	u: "baabb",
	v: "baabb",
	w: "babaa",
	x: "babab",
	y: "babba",
	z: "babbb"
}

const baconCipher = () =>{
	let crypted = "";
	const input = process.argv[3].toLowerCase();
	for(let i=0; i<input.length;i++){
		let currChar= input.charAt(i);
		if(currChar == " "){
			crypted += " ";
		}
		else{
			crypted += bacon_library[currChar];
		}
	}
	console.log(crypted);
}
const baconDecipher = () =>{
	let string = process.argv[3].toLowerCase();
	string = string.split(" ");
	let decrypted = "";

	for(let i=0; i<string.length;i++){
		let currArray = string[i];
		let count = 0;
		let currStr = "";
		for(let k=0; k<currArray.length;k++){
			currStr += currArray.charAt(k);
			if(count < 4){	
				count++
			}
			else if(count == 4){
				for(let key in bacon_library){
					if(bacon_library[key] == currStr){
						decrypted += key;
						currStr = "";
						count = 0;
					}
				}
			}
		}

	}	
	console.log(decrypted);
}

if(process.argv[2] === "baconCipher"){
	console.log("Welcome to baconEncoder");
	console.log(process.argv[3]);
	baconCipher();
}
if(process.argv[2] === "baconDecipher"){
	console.log("Welcome to baconDecoder");
	console.log(process.argv[3]);
	baconDecipher();
}

/**
 * ===================================
 * Generate random library
 * ===================================
 */

/*
@subLength: num of letters in substitution string
@specifyL: specify which letters in substitution
@totalLetter: how many different letters are used in substitution
*/
const randomizer = (subLength,specifyL,totalLetter) =>{
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	//@crypt L is the letters used for substitution
	//initial cryptL contains specifyL
	let cryptL = "" + specifyL;
	for(let i=0; i<(totalLetter-specifyL.length); i++){
		let randomPos = Math.floor(Math.random()*26+1);
		let randomLetter = alphabet.charAt(randomPos);
		//check if the randomLetter already exist in cryptL
		if(cryptL.includes(randomLetter)){
			i--;
		}
		else{
			cryptL += randomLetter;
		}
	}
	console.log(cryptL); //working successfully

	//create a library
	const random_library = {
		a: "",
		b: "",
		c: "",
		d: "",
		e: "",
		f: "",
		g: "",
		h: "",
		i: "",
		j: "",
		k: "",
		l: "",
		m: "",
		n: "",
		o: "",
		p: "",
		q: "",
		r: "",
		s: "",
		t: "",
		u: "",
		v: "",
		w: "",
		x: "",
		y: "",
		z: ""
	};

	for(let key in random_library){
		let randomCombin = "";
		for(let j=0; j<subLength; j++){
			let randomCurr = cryptL.charAt(Math.floor(Math.random()*subLength));
			// console.log("before: " + randomCurr);
			if(randomCurr != ""){
				// console.log("after: " + randomCurr);
				randomCombin += randomCurr;
			}
			else{
				j--;
			}
			// console.log(randomCombin);
		}

		if(random_library[key] != randomCombin){
			if(random_library[key] == ""){
				random_library[key] = randomCombin;
			}
		}
	}

	return random_library;
}

