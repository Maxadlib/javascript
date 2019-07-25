
// JS2 : Exercice 1
var randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);

var newParagraph = document.createElement("p");

var random100 = document.createTextNode("Voici un nombre aléatoire entre 10 et 100 = "+randomNumber);

newParagraph.appendChild(random100);

document.getElementById("JS2_1").appendChild(newParagraph);

// FIN Exercice 1
