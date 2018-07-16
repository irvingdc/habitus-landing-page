!function(t,n){function e(){if(!a){a=!0;for(var t=0;t<d.length;t++)d[t].fn.call(window,d[t].ctx);d=[]}}function o(){"complete"===document.readyState&&e()}t=t||"docReady",n=n||window;var d=[],a=!1,c=!1;n[t]=function(t,n){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");return a?void setTimeout(function(){t(n)},1):(d.push({fn:t,ctx:n}),void("complete"===document.readyState?setTimeout(e,1):c||(document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",e)),c=!0)))}}("docReady",window);

docReady(start);

function start(){
	console.log("starting")
  	setTimeout(()=>{
		showImages()
	},500);
}
function showImages(){
	document.querySelectorAll(".background-hidden").forEach(it=>{it.classList.remove("background-hidden")})
}
function showContact(){
	document.querySelector("#contact").classList.add("displayed")
}
function hideContact(){
	document.querySelector("#contact").classList.remove("displayed")
}