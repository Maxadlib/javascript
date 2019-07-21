var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Autre texte";
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
// console.log(sidebar.innerHTML);

var arrayOfH1s = mainContent.getElementsByTagName("h1");
// console.log(arrayOfH1s);
arrayOfH1s[0].innerHTML = "Voici un nouveau titre, c'est magique ;-)";



