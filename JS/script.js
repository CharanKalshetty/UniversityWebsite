// Alert for clicking on envolope button
function mymail() {
  	alert("Mail us at: \n notlegit@bmsit.in \n\n PS: This email id is invalid.");
}
document.getElementById("mail").addEventListener("click", mymail);


// Alert for successful submission of a form
function submitted() {
	alert("You have successfully submitted the form. \n Thank You ");
}


// function for email validation
function validateEmailId(x) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x)) {
		return true;
	}
	return false;
}


//Validation functions
function validateContForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("emailid").value;
	var tbox = document.getElementById("txtbox").value;
	var at = /@/g;
	error = document.getElementById("errormsg");
	if(name.length<=0) {
		error.style.padding = "10px";
		error.innerHTML = "Please enter a valid name";
		return false;
	}
	if(validateEmailId(email)===false) {
		error.style.padding = "10px";
		error.innerHTML = "Please enter a valid email id";
		return false;
	}
	if(tbox.length<3) {
		error.style.padding = "10px";
		error.innerHTML = "Please enter your issue";
		return false;
	}
	submitted();
	error.style.padding = "0px";
}
if (document.getElementById("contsub")) {
document.getElementById("contsub").addEventListener("click", validateContForm);
}

function validateRegForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("emailid").value;
	var course = document.getElementById("course").value;
	error = document.getElementById("errormsg");
	if(name.length<=0) {
		error.style.padding = "10px";
		error.innerHTML = "Please enter a valid name";
		return false;
	}
	if(validateEmailId(email)===false) {
		error.style.padding = "10px";
		error.innerHTML = "Please enter a valid email id";
		return false;
	}
	if(course.length==15) {
		error.style.padding = "10px";
		error.innerHTML = "Please select a course";
		alert("Please select a course.");
		return false;
	}
	submitted();
	error.style.padding = "0px";
}
if (document.getElementById("regsub")) {
document.getElementById("regsub").addEventListener("click", validateRegForm);
}