/*
al presionar el botón mostrará 10 números
que estaran contenidos en un vector.
*/

function mostrar() {
	let arrayDiezNumeros = [];

	arrayDiezNumeros.push(1);
	arrayDiezNumeros.push(2);
	arrayDiezNumeros.push(3);
	arrayDiezNumeros.push(4);
	arrayDiezNumeros.push(5);
	arrayDiezNumeros.push(6);
	arrayDiezNumeros.push(7);
	arrayDiezNumeros.push(8);
	arrayDiezNumeros.push(9);
	arrayDiezNumeros.push(10);

	for (let i = 0; i < 10; i++) {

		document.write("En la posición " + i + " estará el array " + arrayDiezNumeros[i] + "<br>");
	}
}



/*
function mostrar() {

	var miArray = new Array();

	miArray[0] = 5;
	miArray[1] = 74;
	miArray[2] = 8;
	miArray[3] = 94;
	miArray[4] = 5;
	miArray[5] = 0;
	miArray[6] = 80;
	miArray[7] = 789;
	miArray[8] = 5;
	miArray[9] = 7;

	document.write("El contenido del vector es: <br>");

	for (var i = 0; i < 10; i++) {

		document.write("Posicion " + i + "-->" + miArray[i] + "<br>");
	}
}
*/

/*
**ARRAY
una variable q puede tener adentro mas de un valor
almacena datos que pido al usuario

var arrayEdades = [20, 30, 40, 50, 60]

accedo a los elementos a traves del indice
alert(arrayEdades[0]); --> primera posicion

array
for (var i=0; i)
vector=array
*/
