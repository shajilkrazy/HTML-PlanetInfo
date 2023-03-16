var svg = document.getElementsByTagName("svg")[0];
var pausebutton = document.getElementById("playpause");
var animationstate = "play";
var scaling = 1;
const animelems = svg.getElementsByClassName("anim");

function zoomout(){
	window.scaling = window.scaling - 0.5;
	svg.style.transform = "scale(" + window.scaling + ")";
	console.log(window.scaling);
	}
function zoomin(){
	window.scaling = window.scaling + 0.5;
	svg.style.transform = "scale(" + window.scaling + ")";
	console.log(window.scaling);
	}
	
function playpause(){
	if(animationstate == "play"){
		for (let i = 0; i < animelems.length; i++) {animelems[i].style.animationPlayState = "paused";}
		pausebutton.innerHTML = "▶";
		window.animationstate = "paused";
		}
	else if(animationstate == "paused"){
		for (let i = 0; i < animelems.length; i++) {animelems[i].style.animationPlayState = "running";}
		pausebutton.innerHTML = "⏸︎";
		window.animationstate = "play";
		}
}
