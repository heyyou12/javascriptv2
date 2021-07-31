//fechas
let fecha = new Date();//fecha y hora actual del sistema
let anio = fecha.getFullYear();
let mes = fecha.getMonth()+1;//siempre agregamos +1 porque cuenta desde 0
let dia = fecha.getDate();//getDay nos da es el numero de la semana colocamos el getDate
let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();


console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + ": " + hora);

