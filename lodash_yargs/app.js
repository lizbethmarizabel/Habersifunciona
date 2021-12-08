const _= require('lodash');

let x = {"nombre": "Jaime"}
let y = {"apodo":"MitoCode"}
let z = [
    { nombre : "Jaime",apellido:"Medina",edad:26},
    { Nombre : "Mito", apellido: "Code", edad:26}
]

let resultado= _.assign(x,y);
console.log(resultado);