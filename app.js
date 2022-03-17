
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

/*
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
*/



let num1=Number(prompt("Ingrese primer numero"));
let num2=Number(prompt("Ingrese segundo numero"));
let opcion ="";

do {

    alert(" 1) SUMA\n"+" 2) RESTA\n"+" 3) MULTIPLICACIÓN\n"+" 4) DIVISIÓN\n"+" 5) SALIR\n"+"ELIJA OPCIÓN");
    
    menu=parseInt(prompt("ELIJA OPCIÓN"));

    switch (menu) {
        case 1:            
            let suma = num1 + num2;            
            alert("La suma de " + num1 + " + " + num2 + " es = " + suma);
            opcion = prompt("Desea ingresar otros numeros (S/N)")
            if ((opcion == "S") || (opcion == "s")) {
                num1=Number(prompt("Ingrese primer numero"));
                num2=Number(prompt("Ingrese segundo numero"));                
            } else {
                break;                
            }
            break;
            
        case 2:
            let resta = num1 - num2;            
            alert("La resta de " + num1 + " - " + num2 + " es = " + resta)
            opcion = prompt("Desea ingresar otros numeros (S/N)")
            if ((opcion == "S") || (opcion == "s")) {
                num1=Number(prompt("Ingrese primer numero"));
                num2=Number(prompt("Ingrese segundo numero"));                
            } else {
                break;                
            }
            break;

        case 3:
            if ((num1==0) || (num2==0)) {
                alert("Multiplicacion por 0. INCORRECTO")
                
            } else {
                let mult = num1 * num2;
                alert("El producto de " + num1 + " * " + num2 + " es = " + mult)
            }       
            opcion = prompt("Desea ingresar otros numeros (S/N)")
            if ((opcion == "S") || (opcion == "s")) {
                num1=Number(prompt("Ingrese primer numero"));
                num2=Number(prompt("Ingrese segundo numero"));                
            } else {
                break;                
            }
            break;

        case 4:
            if (num2==0) {
                alert("Division por 0. INCORRECTO")
                
            } else {
                let div = num1 / num2;
                alert("La división de " + num1 + " / " + num2 + " es = " + div)
            }       
            opcion = prompt("Desea ingresar otros numeros (S/N)")
            if ((opcion == "S") || (opcion == "s")) {
                num1=Number(prompt("Ingrese primer numero"));
                num2=Number(prompt("Ingrese segundo numero"));                
            } else {
                break;                
            }
            break;

        case 5:
            alert("HASTA LA PRÓXIMA");
            break;

        default:
            alert("OPCION INCORRECTA")    

    }
} while (menu!=5);


