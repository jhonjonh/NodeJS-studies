var nome = "Minha calculadora V1"

function soma(a,b){
    return a + b;
}

function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a - b;
}

function div(a,b){
    return a / b;
}

//exportando multiplas funcoes
module.exports ={
    soma,
    mult,
    sub,
    div,
    nome
}; 