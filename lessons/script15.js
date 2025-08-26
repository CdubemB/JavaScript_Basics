/* DOM in javascript */

window.open() //this is an example ofn using BOM browser object model. window is the key word

document.querySelector(".class") // this is an example of using the Document object model. document is the key word

/* <header></header>  this is a node */

document.querySelector(".boi") //this will get the class boi

let links = document.querySelectorAll("a") //gets all a tags and makes array

linksLength = links.length() // will get the number of tags in the array

for (i = 0; i < linksLength; i++){
  console.log("i know equal i"); //runs until the amount of tags are met
}