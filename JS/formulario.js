//FUNCION PARA sumar 2 numero
function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
	//alert("La suma es: " + sum);
}
function Resta(numer1,numer2){
	let n11,n22,sum;
	n11=parseFloat(numer1);
	n22=parseFloat(numer2);
	Resta=n11-n22;
	alert("La resta es: " + Resta)
}

function Multiplicacion(nume1,nume2){
	let n1,n2,sum;
	n1=parseFloat(nume1);
	n2=parseFloat(nume2);
	Multiplicacion=n1*n2;
	alert("La multiplicacion es: " + Multiplicacion)
}
function Division(num1,num2){
	let n1,n2,sum;
	n1=parseFloat(num1);
	n2=parseFloat(num2);
	Division=n1/n2;
	alert("La division es: " + Division)
}





//Crear funciones en js

//function calcularSuma(){
//	alert("Hola bienvenido!");
//}
//Crear funciones en js

//function calcularSuma(){
//	alert("Hola bienvenido!");
	//document.write("Hola");
//}
/*let nombre=prompt("Ingresa tu nombre: ");
let edad=prompt("Ingresa tu edad: ");
document.write("Hola " + nombre);
document.write("<br> Tu edad es: " + edad);

let num1=parseInt(prompt("Ingresa el primer numero: "));
let num2=parseInt(prompt("Ingresa el segundo numero: "));

let suma=num1+num2;
document.write("La suma es: " + suma);
*/

