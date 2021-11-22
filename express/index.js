const express = require("express"); //Importando o Express (instalado via npm)
const app = express(); //Iniciando o Express e passando para a const app

// iniciando um servidor Express 
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})
