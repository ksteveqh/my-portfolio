
// VENTANA DE BIENVENIDA

function Menu(){
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar : \r\n 1. suma \r\n 2. Promedio de notas  \r\n 3. Area del rectangulo \r\n 4. Area del Triangulo \r\n 5. Area de la cirunferencia  \r\n 6. Sueldo semanal de un trabajador \r\n 7. Convertir a pulgadas \r\n 8. Convertir a dolares \r\n 9. Calcular edad"  )
        );
        if (isNaN(nro_ejercicio)){
            alert("por favor ingrese valores");
        }   else {
            MenuEjercicios (nro_ejercicio)
        }
}

// MENU DE EJERCICIOS

    function MenuEjercicios(nro_ejercicio){

        switch(nro_ejercicio){
            case 1:
                let valor1 = parseFloat(prompt("Ingrese el primer valor a sumar"));
                let valor2 = parseFloat(prompt("Ingrese el segundo valor a sumar"));
                alert(ej1_sumarValores(valor1, valor2));
                break
        }

        switch(nro_ejercicio){
            case 2:
                let nota1 = parseFloat(prompt("Ingrese la primera nota"));
                let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
                let nota3 = parseFloat(prompt("Ingrese la tercera nota"));
                let nota4 = parseFloat(prompt("Ingrese la cuarta nota"));
                alert(ej2_calcularPromedio(nota1, nota2, nota3, nota4));
                break
        }

        switch(nro_ejercicio){
            case 3:
                let ladoMayor = parseFloat(prompt("Ingrese el lado mayor del rectangulo"));
                let ladoMenor = parseFloat(prompt("Ingrese el lado menor del rectangulo"));
                alert(ej3_areaRectangulo(ladoMayor, ladoMenor));
                break
        }

        switch(nro_ejercicio){
            case 4:
                let base = parseFloat(prompt("Ingrese la base del triangulo"));
                let altura = parseFloat(prompt("Ingrese la altura del triangulo"));
                alert(ej4_areaTriangulo(base, altura));
                break
        }

        switch(nro_ejercicio){
            case 5:
                let radio =parseFloat(prompt("Ingrese el radio de la circunferncia"));
                alert(ej5_areaCircunferencia(radio));
                break
        }

        switch(nro_ejercicio){
            case 6:
                let horas = parseFloat(prompt("Ingrese el numero de horas trabajadas"));
                let salario = parseFloat(prompt("Ingrese el salario por hora"));
                alert(ej6_sueldoHombre(horas, salario));
                break
        }

        switch(nro_ejercicio){
            case 7:
                let metros = parseFloat(prompt("Ingrese la medida en metros"));
                alert(ej7_conversorMetros(metros));
                break
        }

        switch(nro_ejercicio){
            case 8:
                let soles = parseFloat(prompt("Ingrese el monto en soles a convertir"));
                let cambio = parseFloat(prompt("Ingrese el tipo de cambio actual"))
                alert(ej8_conversorDolares(soles, cambio));
                break
        }
        
        switch(nro_ejercicio){
            case 9:
                let nacimiento = parseInt(prompt("Ingrese el año que nacio"));
                let añoActual = parseInt(prompt("Ingrese el año actual"));
                alert(ej9_calcularEdad(nacimiento, añoActual));
                break
        }

    }

// DECLARACION DE EJERCICIOS

    // EJERCICIO # 1

    // funcion declarativa

    function ej1_sumarValores(a,b){
        if ((isNaN(a)) || (isNaN(b)))
            return "Ingrese valores por favor"
        else{
            return a+b;
            }
    }
    
    // funcion flecha

    // let ej1_sumarValores = (a,b)=> {if (isNaN(a) || isNaN(b))
    //     {return "Ingrese valores por favor"};
    //     return a+b
    // }

    // EJERCICIO # 2

    function ej2_calcularPromedio (a,b,c,d){
        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d))
        return "Ingrese valores por favor"
        else{
        return (a+b+c+d)/4;
        }
    }

    // EJERCICIO # 3

    function ej3_areaRectangulo (L,l){
        if (isNaN(L) || isNaN(l))
            return "Ingrese valores por favor"
        else {
            return L*l
        }
    }


    // EJERCICIO # 4

    function ej4_areaTriangulo (b,h){
        if (isNaN(b) || isNaN(h))
            return "Ingrese valores por favor"
        else {
            return (b*h)/2
        }
    }

    // EJERCICIO # 5

    function ej5_areaCircunferencia(r){
        if (isNaN(r))
            return "Ingrese valores por favor"
        else {
            return 3.14159265*r**2
        }
    }

    // EJERCICIO 6

    function ej6_sueldoHombre(s,h){
        if (isNaN(s) || isNaN(h))
            return "Ingrese valores por favor"
        else {
            return s*h
        }
    }

    // EJERCICIO 7

    function ej7_conversorMetros(m){
        if (isNaN(m))
            return "Ingrese valores por favor"
        else {
            return m/0.00254
        }
    }

    function ej8_conversorDolares(s,c){
        if (isNaN(s) || isNaN(c))
            return "Ingrese valores por favor"
        else{
            return s/c
        }
    }

    function ej9_calcularEdad(n,p){
        if (isNaN(n) || isNaN(p))
            return "Ingrese valores por favor"
        else {
            return p-n
        }
    }


// # 1


// forma 1

// function suma (a,b){
//     return a+b
// }

// document.write("La suma es: ", suma(1,1))

//forma2

// a= prompt("ingresa el numero a")
// b= prompt("ingresa el numero b")

// let suma2 = (a,b) => a+b

// document.write("La suma de los numeros ", a, " y ", b, " es ", c)

// # 2

// forma 1

// function notas (a,b,c,d){
//     return (a+b+c+d)/4
// }

// document.write("El promedio de notas es: ", notas(15,18,16,20))

// forma 2

// let notas2 = (a,b,c,d) => (a+b+c+d)/4

// document.write("El promedio de notas es: ", notas2(15,18,16,20))

// # 3

// # 3

// forma 1

// function rectangulo (b,h){
//     return b*h
// }

// document.write("El area del rectangulo es: ", rectangulo(4,8))

// forma 2

// let rectangulo2 = (b,h) => b*h

// document.write("El area del rectangulo es: ", rectangulo2(10,6))

// # 4

// forma 1

// function triangulo (b,h) {
//     return b*h/2
// }

// document.write("El area del trigulo es: ", triangulo(8,10))

// forma 2

// let triangulo2 = (b,h) => b*h/2 

// document.write("El area del triangulo es: ", triangulo2(5,8))

// # 5

// function circulo (r){
//     return 3.1415*(r)**2
// }

// document.write("El area de la cirucnferencia es: ", circulo(4))

// let circulo2 = (r) => 3.1415 * (r)**2

// document.write("El area de la circunferencia es: ", circulo2(2))
 
// # 6

// forma 1

// function sueldo(s,h){
//     return s*h
// }

// document.write("El suelfo percibido por el trabajador es: ", sueldo(50,5))

// forma 2 

// let sueldo2 = (s,h) => s*h

// document.write("El sueldo percibido por el obrero es: ", sueldo2(10,70))

// # 7

// forma 1

// function conversor (m){
//     return m*0.0254
// }

// document.write("Se necesita ", conversor(10000), " pulgadas de tela")

// forma 2

// let conversor2 = (m) => m*0.0254

// document.write("Se necesita ", conversor2(100), " pulgadas de tela")

// # 8 

// forma 1

// function dolares(soles){
//     return soles/3.78
// }

// document.write("Usted podra comprar: ", dolares(37800))

// forma 2

// let dolares2 = (sol) => sol/3.78

// document.write("Usted podra adquirir: ", dolares2(3780), " dolares americanos")