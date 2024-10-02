//45 QUESTION ASINGMENT

//QUESTION 03

//NAME CASES
let personName: string = "bisma imran";

// printing the persons name in lowercase
console.log(`TO lowercase ${personName.toLowerCase()}`);

// printing name to uppercase
console.log(`TO UPPERCASE ${personName.toUpperCase()}`);

// printing name to title case
console.log(
  `TO Titlecase ${
    personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()
  }`
);
