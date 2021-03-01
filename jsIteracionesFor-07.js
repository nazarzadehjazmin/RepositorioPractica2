/*
//EJERCICIO 7 FOR
Al presionar el botón pedir un número.
mostrar los numeros divisores desde el 1 al número
ingresado, y mostrar la cantidad de
numeros divisores encontrados.
*/

/*
function mostrar() {

	let numero;
	let contadorDivisores;

	contadorDivisores = 0;
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for (let i = 0; i <= numero; i++) {

		if (numero % i == 0) {
			contadorDivisores++;
			console.log(i);
		}

	}
	console.log("Cantidad de divisores: " + contadorDivisores);
}
*/

//Si un numero es divisible por otro, el resto debería dar 0 en esta sentencia


//EJERCICIO DE MAURICIO

/*cargar los numeros
for cual es el max del array
for cual es el min del array
for cual es el promedio del array
Pedir N números guardarlos en un array y luego calcular MAX MIN y PROM

/*
//EJEMPLO DE CLASE
function mostrar() {
	let numeroIngresadoArray = [];
	let numeroIngresado;
	let maximo;
	let minimo;
	let promedio;
	let acumuladorSuma;
	let contadorSuma;
	let confirmar;

	acumuladorSuma = 0;
	contadorSuma = 0;

	do {
		numeroIngresado = parseFloat(prompt("Ingrese un número"));

		numeroIngresadoArray.push(numeroIngresado);

		confirmar = confirm("¿Seguir ingresando números?");
	} while (confirmar == true);

	//máximo
	maximo = numeroIngresadoArray[0];
	for (let i = 1; numeroIngresado > maximo; i++) {
		maximo = numeroIngresado;
	}

	//minimo
	minimo = numeroIngresadoArray[0];
	for (let i = 1; numeroIngresado < minimo; i++) {
		minimo = numeroIngresado;
	}

	//promedio
	for (let i = 0; i < numeroIngresado; i++) {
		acumuladorSuma += numeroIngresadoArray[i];
	}

	promedio = acumuladorSuma + numeroIngresadoArray.length;

	console.log(maximo);
	console.log(minimo);
	console.log(promedio);

}
*/



function mostrar() {

	let numeroIngresadoArray = [];
	let numeroIngresado;
	let continuar;
	let numeroMaximo;
	let numeroMinimo;
	let promedio;
	let acumuladorSuma;

	acumuladorSuma = 0;


	//toma de datos
	//no validé nada en este caso
	do {
		//le pido el número
		numeroIngresado = parseFloat(prompt("Ingrese un número"));

		//validacion
		while (isNaN(numeroIngresado) == true) {
			numeroIngresado = parseFloat(prompt("Reingrese un número"));
		}

		//agrego el número al array
		numeroIngresadoArray.push(numeroIngresado);

		//le pregunto si quiere continuar con un botón
		continuar = confirm("¿Seguir ingresando números?");
	} while (continuar == true);



	//maximo
	numeroMaximo = numeroIngresadoArray[0];
	for (let i = 1; numeroIngresado > numeroMaximo; i++) {

		numeroMaximo = numeroIngresado;
	}

	console.log("Número máximo: " + numeroMaximo);


	//minimo
	numeroMinimo = numeroIngresadoArray[0];
	for (let i = 1; numeroIngresado < numeroMinimo; i++) {
		numeroMinimo = numeroIngresado;

	}

	console.log("Número mínimo: " + numeroMinimo);



	//promedio
	for (let i = 0; i < numeroIngresadoArray.length; i++) {
		acumuladorSuma += numeroIngresadoArray[i];

	}

	//Si da NaN = fijarse si inicialicé el contador, si está bien la condición

	promedio = acumuladorSuma / numeroIngresadoArray.length;

	console.log("Promedio: " + promedio);
	console.log("Array: " + numeroIngresadoArray);



}










/*

	var miArray = new Array();

	for (var i = 0; i < 5; i++) {
		miArray[i] = parseInt(prompt("Ingrese un numero"));
	}



	for (var i = 0; i < 5; i++) {

		document.write("Posicion " + i + "-->" + miArray[i] + "<br>");
	}

*/

//