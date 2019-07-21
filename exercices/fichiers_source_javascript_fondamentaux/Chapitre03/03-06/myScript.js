var phrase = "Il a dit : \"C'est une simple phrase\".";
var path = "Chapitre03/03-06/simple.html";
var a = "Bonjour";
var b = "bonjour";
var c = "anguille";
var d = "Saumon";

console.log(phrase);
console.log(phrase.length); // Propriété qui pemet de compter le nombre de caractères (espaces et point final compris).
console.log(phrase.toUpperCase()); // Foncionnalité qui permet de mettre en toutes cap.
console.log(phrase.split(" ")); // Permet de séparer la chaîne de caractères par le caractère sélectionné (ici ` `) 

console.log(path.split("/"));

if(a.toUpperCase() == b.toUpperCase()){
    console.log("C'est égal !");
}

if(c > d){
    console.log("C'est supérieur !");
}else{
    console.log("C'est inférieur !"); // Le a minuscule de anguille vient après le S majuscule de Saumon
}