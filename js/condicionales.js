
 //Pedir un numero mediante prompt si es mayor a 1000 mostrar alert!
 let numberUser = parseInt(prompt("Adivina un numero en la escala de 0 a 1000 "));
if(numberUser == 1000) {
    alert("Numero correcto ")
}else if ((numberUser >= 0 )  && (numberUser <= 900)){
    alert("Anduviste cerca")
}
 else {
        alert("Numero incorrecto ");
 } 
 
 //Pedir un txt mediante prompt si es igual a "hola" mostrar alert


 let   saludoIngresado   = prompt("Ingresar saludo ");

if((saludoIngresado!="") && ((saludoIngresado == "HOLA") || (saludoIngresado =="Hola"))){
    alert("Saludo valido"); 
}else{
    alert("Error: Ingresar saludo valido");
}
 //Pedir un numero mediante prompt si esta entre 10 y 50 mostrar alert


let numeroIngresado = parseInt(prompt("Ingresa un numero entre 0 y 50"));

 if ( (numeroIngresado >= 10 ) && (numeroIngresado <=50 ) ) {
    console.log("Tu numero Ingresado es " + numeroIngresado + " : es correcto ");
 }else {
     console.log("Tu numero Ingresado es : " + numeroIngresado + " es incorrecto")
 };
















/* let color = prompt("Adivina el color favorito");

if((color == "Azul") || (color == "azul") || (color == "AZUL") ) {
    console.log("Adivinaste !!")
}else if ((color == "Celeste")  || (color == "celeste") || (color == "CELESTE") )  {
    console.log("Anduviste cerca");
}else {
    console.log(" No es el " + color + " Mi color fav es el azul");
}
 */