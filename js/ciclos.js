 //Tabla de matematica
alert("Tabla Matematica");
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}  


 //Precios supermecados

 alert("Productos : Gaseosas, Harinas, Fideos");
let alimento = prompt("Ingrese el producto y conozca su valor! - ESC para salir");
while (alimento != "ESC") {
    switch (alimento) {
        case "Gaseosa":
            alert("El precio es $ 200");
            break;
        case "Harina":
            alert("El precio es $100");
            break;
        case "Fideos":
            alert("El precio es $90");
            break;
        default:
            alert("Ese producto no esta en stock");
            break;
    }
    alimento = prompt("Ingrese el producto y conozca su valor! - ESC para salir");
} 


let usuario = "pepe";
let contraseña = "hola";
do {
    usuario = prompt("Por favor introdusca usuario");
   contraseña = prompt("Por favor introdusca contraseña");


}while((contraseña != "hola") ||  (usuario != "pepe") );
alert("Binvenido");






