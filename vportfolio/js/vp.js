window.onscroll = function() {scrolled()};

function scrolled(){
	if (document.body.scrollLeft > 700 || document.documentElement.scrollLeft > 700){
	var show=document.getElementById("got").textContent;
	document.getElementById("gothere").innerHTML=show;
	}
	// else{
	// 	document.getElementById("gothere").style.display="none";
	// }
}

function show(){
	var show=document.getElementById("got").textContent;
	document.getElementById("gothere").innerHTML=show;
}