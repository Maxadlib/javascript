// Deux méthodes pour les timers - setTimeout() et SetInterval() (uique / répétitif)

function simpleMessage() {
	alert("Je suis une simple alerte avec le setTimeout !");
}

// settimeout est en milisecondes
setTimeout(simpleMessage,5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval est aussi en milisecondes
var imageInterval = setInterval(changeImage,3000);

myImage.onmouseover = function(){
	clearInterval(imageInterval);
};

myImage.onmouseout = function () {
	imageInterval = setInterval(changeImage,3000);
};