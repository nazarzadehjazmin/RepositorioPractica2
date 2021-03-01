/*
al presionar el botón se pedira, a traves de prompt numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().
*/

function mostrar() {

	let numeroIngresadoArray = new Array();
	let numeroIngresado;
	let seguirIngresandoNumeros;

	seguirIngresandoNumeros = 0;

	do {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		numeroIngresadoArray.push(numeroIngresado);

		//contador?
		seguirIngresandoNumeros = confirm("¿Seguir ingresando números?");
	} while (seguirIngresandoNumeros == true);

	for (let i = 0; i < numeroIngresado; i++) {
		document.write("Números: " + numeroIngresadoArray[i]);
	}

}//FIN DE LA FUNCIÓN

/*

	var miArray = new Array();

	for (var i = 0; i < 5; i++) {
		miArray[i] = parseInt(prompt("Ingrese un numero"));
	}



	for (var i = 0; i < 5; i++) {

		document.write("Posicion " + i + "-->" + miArray[i] + "<br>");
	}


*/