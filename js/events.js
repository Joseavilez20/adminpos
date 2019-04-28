function contraer(){

	var y =document.getElementById("change");
	var sidenav =document.getElementsByClassName("sidenav");
	var content =document.getElementsByClassName("content");

	if(y.getAttribute("value") == "open"){

		sidenav[0].style.width = "230px"
		sidenav[0].style.display= "block";
		y.setAttribute("value", "hidden")
	}else {
		
			y.setAttribute("value", "open")
		sidenav[0].style.width = "50px"
	}
	

}

