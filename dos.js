/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena"; "cal"; "cemento")
Cantidad de bolsas,
Precio por bolsa(más de cero),
al terminar la compra el cliente accede a un descuento segun las bolsas en total

Si compro más de 10 bolsas en total tenes 15 % de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25 % de descuento sobre el total a pagar.

a) El importe total a pagar, bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo("arena"; "cal"; "cemento") con mas cantidad de bolsas en el total de la compra.
d) El tipo mas caro
*/

function mostrar() {

  let tipo;
  let cantidad;
  let precio;
  let continuarIngresando;
  let precioTotal;
  let precioBruto;
  let descuento;
  let acumuladorArena;
  let contadorArena;
  let acumuladorCal;
  let contadorCal;
  let acumuladorCemento;
  let contadorCemento;
  let tipoMasBolsas;
  let precioMasCaro;
  let flagMasCaro;
  let tipoMasCaro;

  contadorArena = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  contadorCal = 0;
  acumuladorCemento = 0;
  contadorCemento = 0;
  flagMasCaro = false;



  do {

    tipo = prompt("Ingrese tipo de producto(arena-cal-cemento)");
    while (isNaN(tipo) == false || tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Reingrese tipo de producto(arena-cal-cemento)");
    }

    cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));
    while (isNaN(cantidad) == true || cantidad < 1) {
      cantidad = parseInt(prompt("Reingrese cantidad de bolsas"));
    }

    precio = parseFloat(prompt("Ingrese precio por bolsa"));
    while (isNaN(precio) == true || precio < 1) {
      precio = parseFloat(prompt("Reingrese precio por bolsa"));
    }

    //Si compro más de 10 bolsas en total tenes 15 % de descuento sobre el total a pagar.
    //Si compro más de 30 bolsas en total tenes 25 % de descuento sobre el total a pagar.
    //a) El importe total a pagar, bruto sin descuento y...
    //b) el importe total a pagar con descuento(solo si corresponde)
    if (cantidad > 10) {
      descuento = 0.15;
    } else {
      if (cantidad < 30) {
        descuento = 0.25;
      } else {
        descuento = 0;
      }
    }

    switch (tipo) {
      case "arena":
        acumuladorArena += cantidad;
        contadorArena++;
        break;
      case "cal":
        acumuladorCal += cantidad;
        contadorCal++;
        break;
      case "cemento":
        acumuladorCemento += cantidad;
        contadorCemento++;
        break;
    }

    //d) Informar el tipo("arena"; "cal"; "cemento") con mas cantidad de bolsas en el total de la compra.
    if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
      tipoMasBolsas = "arena";
    } else {
      if (acumuladorCal > acumuladorCemento) {
        tipoMasBolsas = "cal";
      } else {
        tipoMasBolsas = "cemento";
      }
    }

    //e) El tipo mas caro
    if (flagMasCaro == false || precio > precioMasCaro) {
      tipoMasCaro = tipo;
    }


    continuarIngresando = confirm("¿Continuar ingresando?");
  } while (continuarIngresando == true);


  descuento = precio * cantidad * descuento;
  precioBruto = precio * cantidad;
  precioTotal = precioBruto - descuento;


  //a) El importe total a pagar, bruto sin descuento y...
  document.write("<br>Importe total bruto: " + precioBruto);

  //b) el importe total a pagar con descuento(solo si corresponde)
  document.write("<br>Importe total con descuento: " + precioTotal);

  //d) Informar el tipo("arena"; "cal"; "cemento") con mas cantidad de bolsas en el total de la compra.
  document.write("<br>Tipo con más bolsas: " + tipoMasBolsas);

  //e) El tipo mas caro
  document.write("<br>Tipo más caro: " + tipoMasCaro);


}
