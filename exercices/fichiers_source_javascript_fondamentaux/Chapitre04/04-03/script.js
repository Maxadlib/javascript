var mainTitle = document.getElementById('mainTitle'); // getElementByID quand l'élément est équipé d'un ID

var links = document.getElementsByTagName('a'); // pour rechercher avec le nom de la balise (ici les liens "a")

var linksBar = document.getElementById('homeNav');
var linksBarLinks = linksBar.getElementsByTagName('a');

console.log(mainTitle);
console.log("Cet élément est de type "+mainTitle.nodeType);
console.log("Cet élément a "+mainTitle.childNodes.length+" noeuds enfants");
console.log(links);
console.log("Il y a "+links.length+" liens dans cette page");

console.log("Il y a "+linksBarLinks.length+" liens dans la barre de liens");

