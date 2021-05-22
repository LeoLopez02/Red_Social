function validateSignUp(form) {
	var retorno = true;

	if(form["nickname"].value.trim() == "") {
		alert("Nickname is required")
		form["nickname"].focus()
		retorno = false;
	}
	else if(form["email"].value.trim() == "") {
		alert("Email is required")
		form["email"].focus()
		retorno = false;
	}
	else if(form["passwd"].value.trim() == "") {
		alert("Password is required")
		form["passwd"].focus()
		retorno = false;
	}
	else if(form["passwd"].value != form["passwd_confirmation"].value) {
		alert("Password and Confirm Password are not equal")
		form["passwd"].focus()
		retorno = false;
	}
	
	return(retorno);
}

function validateLogin(form) {
	var retorno = true;

	if (form["email"].value.trim() == "") {
		alert("Email is required or not valid!")
		form["email"].focus()
		retorno = false;
	}
	else if (form["passwd"].value.trim() == "") {
		alert("Password required!")
		form["passwd"].focus()
		retorno = false;
	}
}

function validateEdit(form) {
	var retorno = true;

	if (form["nickname"].value.trim() == "") {
		alert("Nickname required!")
		form["nickname"].focus()
		retorno = false;
	}
	else if (form["email"].value.trim() == "") {
		alert("Email required!")
		form["email"].focus()
		retorno = false;
	}
	else if (form["passwd"].value.trim() == "") {
		alert("Password required!")
		form["passwd"].focus()
		retorno = false;
	}
	else if (form["passwd_confirmation"].value.trim() == "") {
		alert("Password required!")
		form["passwd_confirmation"].focus()
		retorno = false;
	}
}

function validateHome(form) {
	var retorno = true;

	if (form["message"].value.trim() == "") {
		alert("Message is required to post!")
		form["message"].focus()
		retorno = false;
	}
}
