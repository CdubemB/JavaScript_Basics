/*HOISTING IN JAVASCRIPT */

var a =  "First";
var b = "Second";
var c = "Third";

console.log(a + " " + b + " " + c + " "); // This will work
d = 10;

console.log(d);

var d;//This will also work due to hoisting it moves all the variables to the top of the page

function example(){
  var e = 20; 
  return e; 
}

console.log(example());//This works

console.log(example2());//This works because of hoisting
 
function example2(){
   var e = 20; 
  return e; 
}

var f = function(){
  console.log("hello");
}