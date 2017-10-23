
/*

Code for index.html

*/
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
 
  showText("#handwriting", "A Shades Of Happiness Foundation Initiative", 0, 225);    
 
}); 

/*

Code for app.html

*/ 

function startApp(){

	var preloader   = document.getElementById('preloader');
	var application = document.getElementById('startApp');

	setTimeout(function(){
		preloader.style.display = "none";
		application.className += " animated fadeIn";
		application.style.display = "block";
	},1500);
	
}

var answer = ['sel1','sel7','sel10','sel5'];
var answerCount = 0;

function placeImg (imgId) {

	if( answer.indexOf(imgId) < 0) {
	var img = document.getElementById(imgId);
	img.className = " animated fadeOut selectImg";
	} 
	else {
		var img = document.getElementById(imgId);
		var myimg = img.getElementsByTagName('img')[0];
		img.className = " animated fadeOut selectImg";	
		var imgPlace = document.getElementById( answer.indexOf(imgId) );
		var addImages = "<a> <img class=\"animated fadeIn selectImg\" style=\"margin-top:-50px\" src=\""+myimg.src+"\" > </a> ";
		imgPlace.innerHTML = addImages;
		imgPlace.className = "col-md-2";
		answerCount++;		
	}
}
	
function checkValue(){

	if(answerCount === 4) {
		notie.alert({ type: 'success', text: 'Success!', time: 2 });
	}
	else {
		notie.alert({ type: 'error', text: 'Oops!', time: 2 });	
	}
}	

















