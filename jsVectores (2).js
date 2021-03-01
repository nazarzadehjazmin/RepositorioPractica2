/*
al presionar el botón se mostrará 5 nombres
que estaran contenidos en un vector.
*/

function mostrar() {

	let arrayDeNombres = new Array("Maru", "Sol", "Flor", "Meli", "Ate");


	for (let i = 0; i < 5; i++) {
		document.write("En la posición " + i + " estará el nombre " + arrayDeNombres[i] + "<br>");

	}


}


/*
var miArray = new Array();

miArray[0]="Juan";
miArray[1]="Luis";
miArray[2]="Maria";
miArray[3]="Nahuel";
miArray[4]="Yolanda";


document.write("El contenido del vector es: <br>");

for(var i=0; i<5; i++)
{

	document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
}
*/