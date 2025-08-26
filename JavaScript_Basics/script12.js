/*CREATING OBJECTS IN JAVASCRIPT */
//The first way of creating an object

let person = new Object();

person.name = "Dubem";
person.eyeColor = "B-Brown";
person.age = 14;
person.updateAge = function(){
  return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age)

//The second way of creating an object
let person = {
  name: "Daniel",
  eyeColor: "B-Brown",
  age: 27,
  updateAge: function() {
    return ++person.age;
  }
}