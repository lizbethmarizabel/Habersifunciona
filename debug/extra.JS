let mensaje= "Debugeando coder!"

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports ={
    saludar:saludar
}