//array

let personas = []; //array vacio
let animales = ["perro", "gato", "serpiente", "lobo", "escorpion", "conejo"];

//console.log(animales.length);
//alert(animales);

// for (let i = 0; i< animales.length; i++) {
//     console.log(animales[i]);
// }

animales[6] = "dragon";
animales.push("ardilla");// se agrega sin saber la cantidad de items, con push se agrega al final
animales.unshift("tigre");//li agrega al incio
//delete animales[5];no utilizar esta manera
animales.splice(5,3);//empieza desde la posidcion 5 hasta los items que le digamos

for (let i = 0; i< animales.length; i++) {
        console.log(animales[i]);
     }