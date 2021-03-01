/*
al presionar el botón se pedira, a traves de prompt numeros
que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros.

pedis dato, los procesas, 
con acumulador de los valores de array

*/


function mostrar() {
	let numeroIngresadoArray = new Array();
	let numeroIngresado;
	let continuar;
	let acumuladorNumeroIngresado;

	//NO INICIÉ EL ACUMULADOR, POR ESO ME DABA NaN
	acumuladorNumeroIngresado = 0;
	do {
		numeroIngresado = parseFloat(prompt("Ingrese número"));
		numeroIngresadoArray.push(numeroIngresado);

		continuar = confirm("¿Seguir ingresando números?");
	} while (continuar == true);


	for (let i = 0; i < numeroIngresado; i++) {
		acumuladorNumeroIngresado += numeroIngresadoArray[i];
		document.write("<br>Número: " + numeroIngresadoArray[i]);
	}

	document.write("<br>Sumatoria de todos los números: " + acumuladorNumeroIngresado);

}


/*
	var miArray = new Array();
	var acum = 0;
	for (var i = 0; i < 5; i++) {
		miArray[i] = parseInt(prompt("Ingrese un numero"));
		acum += miArray[i];

	}



	for (var i = 0; i < 5; i++) {

		document.write("Posicion " + i + "-->" + miArray[i] + "<br>");


	}

	document.write("<h1> La suma de todos los numeros es: " + acum + "</h1>")
*/