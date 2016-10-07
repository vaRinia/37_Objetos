----------------------------
//Ejercicio #1 Informacion Factura
/*Definir la estructura de un objeto que almacena una factura. Las facturas están formadas por la información de la propia empresa 
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente (similar a la de la empresa), una lista de elementos 
(cada uno de los cuales dispone de descripción, precio, cantidad) y otra información básica de la factura (importe total, tipo de iva, forma de pago).

Una vez definidas las propiedades del objeto, añadir un método que calcule el importe total de la factura y actualice el valor de la propiedad correspondiente. 
Por último, añadir otro método que muestre por pantalla el importe total de la factura.*/

// se creará un objeto por prototipo

function Factura (empresa, cliente, elementos) {
	this.empresa = empresa;
	this.cliente = cliente;
	this.elementos = elementos;
	this.total = 0; //porque el total se definirá después
	this.getTotal = function () {
		var suma = 0;
		for (var i = 0; i < this.elementos.length; i++ ) {
			var obj = this.elementos[i];
			var dinero = obj.precio * obj.cantidad;
			suma = suma + dinero;
			this.total = suma;
			return suma;
		}
	};
	this.imprimir = function () {
		console.log ("Total de la factura $" + this.total);
	};

}

var objeto1 = {
	cantidad : 2,
	precio : 10,
	descripcion : "Pan"
};

var objeto2 = {
	cantidad : 5,
	precio : 3,
	descripcion : "dulces"
};

var elementoss = [objeto1, objeto2];

var fac = new Factura ({empresa : {
				"nombre de la empresa" : "Bimbo",
				direccion : "Campeche #280",
				telefono : "33340098",} 
				}, "Juan Pérez", elementoss);
fac.getTotal ();
fac.imprimir ();

----------------------
//Ejercicio #2 Cuatrimestre actual

//Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto será necesario que el usuario ingrese el mes actual

------------------------
//Ejercicio #3 Valor futuro de una inversión

/*Realice un programa para calcular el valor futuro de una inversión; la fórmula para obtener este valor es la siguiente:

valor_futuro =valor*Math.pow (1+tasa/100,periodo)

Mostrar el resultado y los valores de cada variable

Ejemplo:

VALOR FUTURO*/


-----------------------------
//Ejercicio #4 Objeto círculo
/*Realizar un programa que permita crear un molde para objetos de tipo círculo al que le pasamos el radio cuando lo inicialicemos, y que tenga una función 
que nos calcule su área, otra su longitud, y estos valores sean mostrados por pantalla.*/



--------------------------------
//Ejercicio #5 Identificar llamada

/*Un teléfono celular cuenta con una funcionalidad de identificación de llamadas permitiendo no solo ver qué número nos intenta contactar sino también conocer qué contacto 
dado de alta en nuestro dispositivo, nos llama.

Realizar un programa que imite esta funcionalidad, principalmente que el usuario al ingresar el número de teléfono, el programa reconozca a quien pertenece el mismo*/


-----------------------------------
//Ejercicio #6 Indice de masa corporal
//Realizar un programa que nos permita calcular el indice de masa corporal de una persona por medio de su peso y altura solicitadas.




----------------------------------
//Ejercicio #7 Gasolinera
/*Realizar un programa que permita simular el funcionamiento de una bomba dispensadora de gasolina. 
Deberá calcular cuánto pagara un usuario por una cantidad determinada de gasolina; el programa además deberá de guardar la cantidad de litros 
disponibles en la bomba e irlos actualizando conforme dispensa gasolina, en caso de terminarse deberá mostrar algún mensaje indicándolo al usuario.*/


//necesitamos el nombre del cliente y los litros que comprará
function Cliente (nombre,litros) { 
	this.nombre = nombre;
	this.litros = litros;
	//la convención de encapsulamiento nos dice que no puedes acceder a las propiedades directamente, sino que se las tienes que pedir, con get
	this.getNombre = function () { 
		return nombre;
	};
	this.getLitros = function (){
		return litros;
	};
}
//necesitamos saber cuántos litros tiene la estación
function Estacion (litros) { 
	this.litros = litros;
	this.precio = 10; //precio de la gasolina
	this.compras = []; //necesitamos saber cuántas compras para conocer cuantos litros quedan
	this.dispensar = function (cliente) {
		var l = cliente.getLitros (); //va a obtener los litros que el cliente quiere comprar, los asignará a la variable l 
		if(this.litros < l) {
			alert ("Se acabó la gasolina mi chava");
			return;
		}
		var costo = this.precio * l;
		alert ("Paga " + costo);
		this.litros = this.litros - l;
		var compra = {
			cliente : cliente,
			consumo: costo
		};
		this.compras.push(compra);
	};
	this.generarReporte = function () {
		this.compras.forEach (function(compra){
			console.log(compra.cliente.nombre + " compra " + compra.cliente.litros + "lts, $" + compra.consumo);
		});
	};
}

var cliente1 = new Cliente("Pedro", 50);
var cliente2 = new Cliente("Juan",20);
var cliente3 = new Cliente("Quiquito",10);
var estacion = new Estacion (125);
estacion.dispensar (cliente1); 
estacion.dispensar (cliente2); 
estacion.dispensar (cliente3); 
estacion.generarReporte();


