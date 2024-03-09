const input = "turpentine and turtles"; 

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {

  for (let j = 0; j < vowels.length; j++) {

    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]); 
    }
  }

  if (input[i].toLowerCase() === "e") {
    resultArray.push(input[i]); 
  } else if (input[i].toLowerCase() === "u") {
    resultArray.push(input[i]);
  }
}
const resultString = resultArray.join("").toUpperCase();

console.log(resultString);