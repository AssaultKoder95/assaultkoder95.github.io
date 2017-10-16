var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
 
  showText("#handwriting", "A Shades Of Happiness Foundation Initiative", 0, 225);    
 
}); 


function startProcedure(){
	var div = document.getElementById('learnWithMe');
	div.className += " fadeOut";

	var newDiv = document.getElementById('startApp');
	newDiv.className += " fadeIn";
	newDiv.style.display = "block";
}