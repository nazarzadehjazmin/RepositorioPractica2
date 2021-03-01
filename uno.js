/*JAZMÍN NAZARZADEH
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo", "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades 
(no puede ser 0 o negativo y
 no debe superar las 1000 unidades),
la Marca y 
el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, 
la cantidad de unidades y el fabricante
b) Del tipo de producto 
con más (cantidad de) unidades en total 
el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/


function mostrar() {
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let siguienteProducto;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let precioJabonCaro;
	let cantidadJabonCaro;
	let fabricanteJabonCaro;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let promedio;
	let productoMasUnidades;

	contadorAlcohol = 0
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese tipo de producto (barbijo, jabón o alcohol)");
		tipo = tipo.toLowerCase();
		while (isNaN(tipo) == false || tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol") {
			tipo = prompt("Reingrese tipo de producto (barbijo, jabón o alcohol)");
			tipo = tipo.toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese precio del producto"));
		while (isNaN(precio) == true || precio < 100 || precio > 300) {

			precio = parseFloat(prompt("Reingrese precio del producto"));
		}

		cantidad = parseInt(prompt("Ingrese cantidad de unidades"));
		while (isNaN(cantidad) == true || cantidad < 1 || cantidad > 1000) {
			cantidad = parseInt(prompt("Reingrese cantidad de unidades"));
		}

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante");


		switch (tipo) {
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				break;
			case "barbijo":
				acumuladorBarbijo += cantidad;
				contadorBarbijo++;
				break;
			case "jabón":

				//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
				if (contadorJabon == 1 || precio > precioJabonCaro) {
					cantidadJabonCaro = cantidad;
					fabricanteJabonCaro = fabricante;
				}
				acumuladorJabon += cantidad;
				contadorJabon++;
				break;
		}


		if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
			productoMasUnidades = "alcohol";
			promedio = acumuladorAlcohol / contadorAlcohol;
		} else {
			if (contadorBarbijo > contadorJabon) {
				productoMasUnidades = "barbijo";
				promedio = acumuladorBarbijo / contadorBarbijo;
			} else {
				productoMasUnidades = "jabón";
				promedio = acumuladorJabon / contadorJabon;

			}
		}


		siguienteProducto = confirm("¿Ingresar siguiente producto?");
	}


	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	document.write("<br><b>Cantidad de unidades del jabón más caro: </b>" + cantidadJabonCaro + " y el <b>fabricante: </b>" + fabricanteJabonCaro);

	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	//PROMEDIO COMPARO CON ACUMULADOR--> ACUMULÉ CANTIDAD DE UNIDADES
	document.write("<br><b>Tipo de producto con más unidades en total de la compra: </b>" + productoMasUnidades + " el promedio por compra: " + promedio);

	//c) Cuántas unidades de Barbijos se compraron en total
	document.write("<br><b>Cantidad de barbijos comprados: </b>" + contadorBarbijo);

}

//RECORDAR= flag es para saber si ya se ingresó una vez