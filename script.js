
document.getElementById('enter').onclick=function(){
	var name = document.getElementById("name").value;
	Cookies.set("person_name", name);
	document.getElementById('h1').innerHTML="Welcome " + Cookies.get("person_name");
	return false;
}
document.getElementById('h1').innerHTML="Welcome " + Cookies.get("person_name");


/**

$.getJSON("http://www.omdbapi.com/?", 
	{
		t: "sharknado"
	},    
	 function(response) {
	 	console.log(response);
	 
	 }
);
**/
$(document).ready(function(){
	$("search.onsu")
}