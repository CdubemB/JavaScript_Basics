
function testExample(a){
    var greeting;
    greeting = "Hi! My name is " + a;
    return greeting;
}
var name = "Dubem"
console.log(testExample(name));


var testExample2 = function(){
    var greeting;
    greeting = "Hi! My name is Dubem.";
    return greeting;
}

console.log(testExample2());