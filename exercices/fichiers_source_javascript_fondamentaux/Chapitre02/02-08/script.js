var a = 1;

while(a<10){
    console.log(a);
    a++;
}
console.log("Boucle terminée !");
// do while est moins fréquent
do{
    console.log(a);
    a++;
}while(a<10);
console.log("Boucle terminée !");

for(var i = 1; i < 10; i+=2){
    if(i == 5){
        break;//arrête la boucle et passe à la suite
    }// fin du if
    console.log(i);
}// fin du for
console.log("Boucle terminée !");
for(var i = 1; i < 10; i+=2){
    if(i == 5){
        continue;//passe au dessus et reprend la boucle
    }// fin du if
    console.log(i);
}// fin du for
console.log("Boucle terminée !");