/*USING MODULE EXPORTS IN NODE */
console.log("hello world from NodeJS");
const PI = 3.14;
class someMathObject{
    constructor(){
        console.log("Object created");
    }
}
const sum = (num1, num2) => num1 + num2;

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.someMathObject = someMathObject;

// you could also do this

module.exports = {
    sum: sum,
    PI: PI,
    someMathObject: someMathObject
};