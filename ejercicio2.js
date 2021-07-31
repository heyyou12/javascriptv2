//insertar variables en texto

let fecha = new Date();//fecha y hora actual del sistema
let anio = fecha.getFullYear();
let mes = fecha.getMonth()+1;//siempre agregamos +1 porque cuenta desde 0
let dia = fecha.getDate();//getDay nos da es el numero de la semana colocamos el getDate
let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

//opcion tradicional
console.log(anio + "/" + mes + "/" + dia + ": " + hora);
//opcion 2 o alternativa
let formatoFecha = `El dia es: ${dia} del mes ${mes} del año ${anio} y la hora actual es: ${hora}`;



console.log(formatoFecha);
