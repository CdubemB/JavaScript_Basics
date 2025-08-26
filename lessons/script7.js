/*CREATING A CALCULATOR WITH JAVASCRIPT */
function calc(){
  //defiining the first number that goes in the calculator
  var a = parseInt(document.querySelector("#value1").value);
  // defining the second number that goes in the calculator
  var b = parseInt(document.querySelector("#value2").value);
  //defing the operator selector
  var op = document.querySelector("#operator").value;
  //Defing the calculator
  var calculate;
  //Creating what each of th calculations will do
  if(op == "Add"){
      calculate = a + b;
  }
  else if (op == "Min"){
    calculate = a - b;
  }
  else if (op == "Div"){
    calculate = a / b;
  }
  else if (op == "Mul"){
    calculate = a * b;
  }
  //Showing the result in the website
  document.querySelector("#result").innerHTML = calculate;
  
}