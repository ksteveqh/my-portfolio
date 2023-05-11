Proceso calculadora
	
	//entrada
	
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir cociente Como Real;
	
	// Proceso 
	
	Escribir "ingrese el numero 1";
	leer numero1;
	Escribir "ingrese el numero 2";
	leer numero2
	
	suma = numero1+numero2
	resta= numero1-numero2
	producto= numero1*numero2

	si (numero2=0) Entonces
		Escribir "No se puede dividir entre 0 ", cociente=0;
		
	SiNo
		cociente= numero1/numero2;
		
	FinSi
	
	// salida
	
	Escribir "Suma forma 1 es: " , (suma);
	Escribir "Suma forma 2 es: " , numero1 + numero2
	Escribir "La resta es: ", (resta)
	Escribir "El producto es: ", (producto)
	Escribir "El cociente es: " , (cociente)
FinProceso
