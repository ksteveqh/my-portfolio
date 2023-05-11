Proceso una_tarde_de_cine
	
	// Entrada
	
	Definir nombreCliente Como Caracter;
	Definir precioCompra Como Real;
	Definir cantidadEntrada Como Entero;
	Definir numeroAsientos Como Entero;
	
	//proceso
	
	Escribir "ingrese su nombre" 
	Leer nombreCliente
	Escribir "cantidad de entradas";
	Leer cantidadEntrada
	Escribir "ingrese el precio";
	Leer precioCompra;

	//salida
	
	Escribir "Buenas tardes señor: ", nombreCliente, ", usted compro ", cantidadEntrada, " entradas, el precio a pagar es de ", precioCompra * 1.18, " soles"
	
FinProceso
	