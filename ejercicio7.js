//ejemplo while

let op = prompt("ingrese 1 para sumar y 2 para restar");

while (op !== "1" && op !== "2") {
    alert("favor ingrese una opcion valida entre 1 y 2");
    op = prompt("ingrese 1 para sumar y 3 pra restar");
}
alert("se piden los numeros y se hacen operaciones");

// if (op !== "1" && op !== "2") {
//     alert("favor ingrese una opcion valida entre 1 y 2");
// } else {
//     alert("se piden los numeros y se hacen operaciones");
// }