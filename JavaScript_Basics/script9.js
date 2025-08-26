/*MULTIPLE VARIABLE TYPES (CONST AND LET) */

if (1 == 1){
  let b= 10;
}

console.log(b)

//The example above won't work which is very useful

if (1 == 1){
  var b= 10;
}

console.log(b)

//The example above will work which is very unuseful

const EXAMPLE = 10;

console.log(EXAMPLE);

EXAMPLE = 120;

console.log(EXAMPLE);//This will not work because example is a constant whic is useful (sometimes)