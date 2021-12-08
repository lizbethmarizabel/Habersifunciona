const os=require('os');
const fs=require('fs');
const mi=require('./mito.js')
let cpu=os.cpus();
let sistema=os.platform();
let usuario=os.hostname();

//mi.vivir();
//mi.vivir();
//console.log(mi.subs);
//let respta=mi.sumar(10,5);
setTimeout(()=>{
   console.log("Gozu")
},2000);
//let respta=mi.mostrar(10);
//console.log(respta);
/*let cpu_string=JSON.stringify(cpu)
fs.appendFile('mitocode.txt',`Informacion del cpu: ${cpu_string} ` ,function(error){
    if(error){
    console.log('Error al crear archivo');
    }
});*/
