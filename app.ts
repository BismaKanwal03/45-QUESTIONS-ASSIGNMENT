//45 QUESTION ASINGMENT

//QUESTION 03

//NAME CASES
let personName: string = "bisma";

// printing the persons name in lowercase
console.log(`TO LOWERCASE ${personName.toLowerCase()}`);

// printing name to uppercase
console.log(`TO UPPERCASE ${personName.toUpperCase()}`);

// printing name to title case
console.log(
  `TO TITLECASE ${
    personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()
  }`
);
