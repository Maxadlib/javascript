// JS1 : Exercice 1

var nom = "HEURTEL";
var prenom = "Pierre";
var newParagraph = document.createElement("p");

var paraId = document.createTextNode("Désignation de la personne : "+nom+" "+prenom);

newParagraph.appendChild(paraId);

document.getElementById("JS1_1").appendChild(newParagraph);

console.log("Désignation de la personne : "+nom+" "+prenom);

// FIN Exercice 1
// JS1 : Exercice 2

var nbre1 = 3;
var nbre2 = 5;
var newParagraph = document.createElement("p");

var addition = document.createTextNode("Le résultat de l'addition est : "+nbre1+" + "+nbre2+" = "+(nbre1 + nbre2));

newParagraph.appendChild(addition);

document.getElementById("JS1_2").appendChild(newParagraph);

// FIN Exercice 2
// JS1 : Exercice 3
var points = 400;
var valpoint = 10.5;

var newParagraph = document.createElement("p");

var salaire = document.createTextNode("Le salaire net de Mr. Durand est de : ("+points+" x "+valpoint+") - (("+points+" x "+valpoint+")/10) = "+((points*valpoint)-((points*valpoint)/10))+" €");

newParagraph.appendChild(salaire);

document.getElementById("JS1_3").appendChild(newParagraph);

// FIN Exercice 3
// JS1 : Exercice 4
var ray1 = 5.5;
var ray2 = 3.5;
var surface1 = Math.PI*(ray1*ray1);
var surface2 = Math.PI*(ray2*ray2);
// création balise HTML -> HTMLParagraphElement
var newParagraph1 = document.createElement("p");
var newParagraph2 = document.createElement("p");
var newParagraph3 = document.createElement("p");
// création noeud texte
var reponse1 = document.createTextNode("1ère surface = "+surface1);
var reponse2 = document.createTextNode("2ème surface = "+surface2);
var soustraction = document.createTextNode("Différence entre les 2 surfaces = "+(surface1-surface2));
// inject noeud texte dans pbalise HTML
newParagraph1.appendChild(reponse1);
newParagraph2.appendChild(reponse2);
newParagraph3.appendChild(soustraction);
// inject le résultat dans le DOM (document)
document.getElementById("JS1_4a").appendChild(newParagraph1);
document.getElementById("JS1_4b").appendChild(newParagraph2);
document.getElementById("JS1_4c").appendChild(newParagraph3);

// FIN Exercice 4
// FIN JS1
