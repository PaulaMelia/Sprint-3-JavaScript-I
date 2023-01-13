
// Exercise 6
function validate() {
	var error = 0;
	// Obtener los campos de entrada
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	//Validar campos ingresados ​​por el usuario: nombre, teléfono, contraseña y correo electrónic
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
