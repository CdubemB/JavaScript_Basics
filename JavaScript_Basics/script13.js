/*CREATING OBJECT CONSTRUCTORS */

function Person(name, eyeColor, age) {
  this.name = name;
  this.eyeColor= eyeColor;
  this.age = age;
  this.updateAge = function(){
    return ++this.age;
  }
}

let person01 = new Person("Dubem", "B-Brown", 14);
let person02 = new Person("Bob", "Blue", 15);
console.log(person02.updateAge());
console.log(person01.updateAge());