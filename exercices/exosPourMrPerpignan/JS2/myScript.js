
// JS2 : Exercice 1
var randomNumber = Math.round(Math.random()*100);

var newParagraph = document.createElement("p");

var random100 = document.createTextNode("Voici un nombre aléatoire entre 10 et 100 = "+randomNumber);

newParagraph.appendChild(random100);

document.getElementById("JS2_1").appendChild(newParagraph);

// FIN Exercice 1

// JS2 : Exercice 2
var aNumber = Math.round(Math.random()*10);
var bNumber = Math.round(Math.random()*10);

function produit(){
  var btnProduit = document.getElementById("btnProduit");
  return aNumber * bNumber;
  btnProduit.onclick = alert("Bonjour !");
;}

var newParagraph2 = document.createElement("p");
newParagraph2.appendChild(random100);
document.getElementById("JS2_2").appendChild(newParagraph2);

btnProduit.onclick= produit;

window.onload="initElement();";
// console.log(produit);

// FIN Exercice 1
