const express = require("express"); // Importando o express
const app = express(); // carrrega iniciando todo o express nesssa variável app

//Rotas caminhos para a aplicação
app.get("/", function(req, res){
    res.send("Seja bem vindo !"); // Só pode enviar uma resposta
});

app.get("/blog", function(req, res){
    res.send("Seja bem vindo ao meu blog !"); // Só pode enviar uma resposta
});

app.get("/canal/youtube", function(req, res){
    res.send("Seja bem vindo ao meu canal !"); // Só pode enviar uma resposta
});

app.listen(3000, function(error){

    if(error){
        console.log("Ocorreu um erro !");
    } else {
        console.log("Servidor iniciado ON");
    }

})