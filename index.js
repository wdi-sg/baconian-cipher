//Generate Cipher

// var randomGenerator(){
//   lettersArray[Math.ceil(Math.random()*2)];

// } 

//recursive function for cipher
var generateCipher = (encodeLength, set, setLength, cipherLength, cipherString, cipherCodeList) => {
  let recursiveDepth = Math.ceil(Math.log(encodeLength)/Math.log(setLength))
  for(let i=0; i< setLength; i++ ){
    let newCipherString = cipherString + set[i];
  // console.log(newCipherString)
  if(newCipherString.length < recursiveDepth){
    cipherCodeList = generateCipher(encodeLength, set, setLength, cipherLength, newCipherString, cipherCodeList);
  // console.log(newCipherString)
}
else if(newCipherString.length == recursiveDepth){
  for(var j=0; j< cipherLength - recursiveDepth;j++){
newCipherString += set[Math.floor(Math.random()*3)]
  }
  cipherCodeList.push(newCipherString) 
}
if(i == setLength -1){
    // console.log(cipherCodeList)
    return cipherCodeList
  }
}
}

var cipher = (cipherLength, letters, code) =>{
  var lettersArray = letters.split("");
  var cipherCode = {};
  var cipherCodeList = [];
  var cipherString = "";
  if(Math.pow(lettersArray.length, cipherLength) < 25 ){ console.log("Insufficient cipher length. You need a minimun length of 5 and 2 chars or a minimum length of 3 and 3 chars. Please use the format ' node index.js 3 a,b,c '"); return;}
  //generate all possible cipher
  cipherCodeList = generateCipher(26, lettersArray, lettersArray.length, cipherLength, cipherString, cipherCodeList);

  for(var i = 0; i < 26;i++){
    randomCodeIndex = Math.floor(Math.random()*cipherCodeList.length)
    cipherCode[String.fromCharCode(97 + i)] = cipherCodeList[randomCodeIndex]
    cipherCodeList.splice(randomCodeIndex,1)
  }

// Set regex
regex = i
re = new RegExp(Object.keys(cipherCode).join("|"),"gi");
//covert
code = code.replace(re, function(matched){
  return cipherCode[matched] + " ";
});
  return code
}

  //   //26 letters
  // for(i=0; i<26; i++){
  //   //generate cipher based on length
  //   // while()


  // }


if(process.argv[2] == '--help' || isNaN(process.argv[2]) || !process.argv[3] || !process.argv[4] ){
console.log("Use the format - node index.js number a,b,d,f code")
}
else{
  console.log(cipher(process.argv[2], process.argv[3], process.argv[4]) )
}


// var reverseCypher = (cypher)=>{

// var reverseCypherObj = {};

// for(var i in cypher){
// // reverse morse code
// reverseCypherObj["a"+cypher[i]] = i;
// }
// return reverseCypherObj
// }


// var computeMorse  = (type, code) =>{
// if(type == "encode"){
// var cypher = morse;
// }
// else{
//  var cypher = reverseCypher(morse);
// }
// //to suit regex for morse code
// code =  " "+ code
// for(var i in cypher){
// // Set regex
// regex = i.replace(/[-.]/g, '\\$&' );
// regex = (regex.length == 1 ? regex : "\\s"+regex.substr(1) +" ")
// re = new RegExp(regex, "g");
// //covert
// code = code.replace(re, cypher[i] + " ");
// }
// return code
// }

// var computeCaeser  = (type, code) =>{
// if(type == "encode"){
// var change = 3;
// }
// else{
//  var change = -3;
// }
// //Spilt String
// codeArray =  code.split("");
// for(i=0; i<codeArray.length; i++){
// //Check for char beyond 26 chars
// codeInt = (parseInt(codeArray[i],36)+change > 36 ? parseInt(codeArray[i],36)-26 : parseInt(codeArray[i],36)+change < 10 ? parseInt(codeArray[i],36) + 26 : parseInt(codeArray[i],36));
// //Replace letters, check for spaces
// codeArray[i] = (isNaN(codeInt) ? " " : String.fromCharCode(codeInt+87+change)) ;
// }
// code = codeArray.join("");
// return code
// }


// switch(process.argv[2]){
// case "morse" :  console.log(computeMorse(process.argv[3], process.argv[4] )); break;
// case "caeser" : console.log(computeCaeser(process.argv[3], process.argv[4] )); break;
// default : console.log("Please use the format morse|caeser encode|decode string")
// }
