//forEach

let animales = ["perro", "gato", "serpiente", "lobo", "escorpion", "conejo"];

//solo para array, cuando no sabemos el limite
for (let animal in animales){
    console.log(animales[animal]);
}
animales.forEach(animal => {
    console.log(animal);
});