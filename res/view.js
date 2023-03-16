var planetid = window.location.href.split("#")[1];
var planetdata = dict[planetid]
var t = 0;
var bearth = document.getElementById("bearth");
var bplanet = document.getElementById("bplanet");
var title = document.getElementById("title");
var plabel = document.getElementById("plabel");
var infodiv = document.getElementById("info"+planetid);
infodiv.style.display = "block";
title.innerHTML = planetdata[0];
plabel.innerHTML = planetdata[0];

function langchange(toen){
	var url = window.location.href;
	if (toen){window.location.href = url.replace("view-ml","view");}
	else{window.location.href = url.replace("view.h","view-ml.h");}
}

function animate(){
	t = t + 0.05;
	if (0.5 * 9.8 * Math.pow(t,2)<433){bearth.style.top = (0.5 * 9.8 * Math.pow(t,2))+'pt';}
	if (0.5 * planetdata[1] * Math.pow(t,2)<433){bplanet.style.top = (0.5 * planetdata[1] * Math.pow(t,2))+'pt';}
	}

var intervalid = setInterval(animate, 50);
setTimeout(function(){clearInterval(intervalid);}, 24000);
