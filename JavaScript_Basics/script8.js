/*GLOBAL SCOPE AND LOCAL SCOPE IN JAVASRIPT */
var number = 10;

function calc(){
  return number;
}

console.log(number)

//The example above will work

function calc(){
  var number = 10;
  return number;
}

console.log(number)

//The example above will not work due to global and local scope