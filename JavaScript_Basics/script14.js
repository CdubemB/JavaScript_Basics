/* HOW TO CREATE A RANDOM NUMBER WITH JAVASCRIPT */

Math.floor(8.6); //this will round 8.6 down to 8

let calc = Math.random(); //this gets a random number below 1 and above 0

console.log(calc)

 calc = Math.random() * 10; //will give a random unit below 10 with decimals

console.log(calc)

calc = (Math.random() * 10) + 1; //will give a random number which can include 10 but below 11 with decimals

console.log(calc);

calc = Math.floor((Math.random() * 10) + 1); // will give a unit between greater than 0 but below 11 without a decimal

console.log(calc);

/* BETTER EXAMPLE OF USING RANDOM NUMBERS */

let getRandomNumber = function (start, range) {
  let getRandom = Math.floor((Math.random() * range) + start);
  while (getRandom > range) {
    getRandom = Math.floor((Math.random() * range) + start);
  }
  return getRandom;
}

console.log(getRandomNumber(300, 400)); // this will give a random number betweeen 300 and 400