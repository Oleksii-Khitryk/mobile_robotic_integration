
function myFunction() {
	    var x = document.getElementById("myTopnav");
		var y = document.getElementById("heder_text_id");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	        y.className += " responsive";
	    } else {
	        x.className = "topnav";
	        y.className = "heder_text";
	    }
}
