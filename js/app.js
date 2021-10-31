//Inputs Strings
let nameUser = prompt("Por favor ingrese su nombre");

console.log("El usuario se llama : " + nameUser);

alert("Bienvenido " + "!" + nameUser + "!" );

//Inputs Numbers

let numberUser = parseInt(prompt("Ingrese su numero de orden "));

let numberSaved = 1;
let numberUser2 =  numberSaved + numberUser;

console.log("El numero de orden del usuario es : " + numberUser2);

//Inputs Prompt
let valorSnack = 100;
let valorDrink = 200;
alert("Eliga Snack : Papas fritas, Picada, Sanwich MIGA")
let User_favoriteSnack =  prompt("Ingrese su Snack")
alert("Eliga su bebida : Coca cola, Agua, Cerveza") 
let User_favoriteDrink = prompt("Ingrese su bebida ")
let valorPedido = valorDrink + valorSnack;
alert("Su pedido es : "  + User_favoriteSnack + " con " +  User_favoriteDrink + " Total Pedido es: $" + valorPedido  + " !Que lo Disfrute! "  ); 

console.log("El usuario ordeno :" + User_favoriteSnack + " con " + User_favoriteDrink + " Total Pedido : $ " + valorPedido );
