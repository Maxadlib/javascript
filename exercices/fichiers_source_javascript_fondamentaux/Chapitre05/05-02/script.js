
document.onclick = function() {
	alert("Vous avez cliqué dans le document");
};
function prepareEventHandlers(){
	var myImage = document.getElementById("mainImage");
	myImage.onclick =  function() {
		alert("Vous avez cliqué sur l'image");
	}
}

window.onload = function() {
	// Préparer ce dont on a besoin
	prepareEventHandlers();
};
