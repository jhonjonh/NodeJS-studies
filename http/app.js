var http = require("http");
const porta = 8181;

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>Guia do Pogramador</h4>");
}).listen(porta);

console.log("Servidor rodando com sucesso na porta" + porta);