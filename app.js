
/*
let pregunta = Number(prompt("Que tabla de multiplicar quiere visualizar?"))
for(let i=0; i<11; i++){
    let resultado = pregunta * i;
    console.log(pregunta + "x" + i + "=" + resultado);
    document.write(pregunta + " x " + i + " = " + resultado + "<br>");
};
*/


/*
let numero = Number(prompt("Ingrese un numero"));
for(let i=0; i<11; i++){
    let suma = numero + i;
    document.write(numero + " + " + i + " = " + suma + "<br>");
}
*/

var menu="MENU\n";
menu+=" 1) SUMA\n";
menu+=" 2) RESTA\n";
menu+=" 3) MULTIPLICACIÓN\n";
menu+=" 4) SALIR\n";
menu+="Ingrese una opción\n";

var cod = 0;

let num1=Number(prompt("Ingrese primer numero"));
let num2=Number(prompt("Ingrese segundo numero"));

do {
    cod=parseInt(prompt(menu))
    switch (cod) {
        case 1:
            
            let suma = num1 + num2;
            document.write("La suma de " + num1 + " + " + num2 + " es = " + suma +"<br>");
            console.log("La suma de " + num1 + " + " + num2 + " es = " + suma);            
            break;

        case 2:
            let resta = num1 - num2;
            document.write("La resta de " + num1 + " - " + num2 + " es = " + resta +"<br>");
            console.log("La resta de " + num1 + " - " + num2 + " es = " + resta)
            break;

        case 3:
            let mult = num1 * num2;
            document.write("El producto de " + num1 + " * " + num2 + " es = " + mult + "<br>");
            console.log("El producto de " + num1 + " * " + num2 + " es = " + mult)
            break;

        case 4:            
            document.write("Hasta la próxima" + "<br>");
            break;
            
        default:
            console.log("Ha ingresado una opción incorrecta")    

    }
} while (cod!=4);

