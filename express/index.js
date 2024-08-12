const express = require("express"); // Importando o express
const app = express(); // carrrega iniciando todo o express nesssa variável app

//Rotas caminhos para a aplicação
app.get("/", function(req, res){
    res.send("<h1>Seja bem vindos !<?h1>"); // Só pode enviar uma resposta
});

app.get("/blog/:artigo?", function(req, res){
   
var artigo = req.params.artigo; 
    if(artigo){
        res.send("Seja bem vindo ao meu blog !" + artigo); 
    }else{
        res.send("Seja bem vindo ao meu blog !"); // Só pode enviar uma resposta
    }

});

app.get("/canal/youtube", function(req, res){

    var canal = req.query["canal"] // queryparametros // estão entrando em desuso
    res.send("Seja bem vindo ao meu canal ! >>>> " + canal); // Só pode enviar uma resposta
});

app.get("/ola/:nome/:empresa", function(req, res){
    //Req : dados enviados do ususario
    //Res : resposta para o ussuario
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send ("Oi " + nome + empresa ); // Só pode enviar uma resposta
});

app.listen(3000, function(error){

    if(error){
        console.log("Ocorreu um erro !");
    } else {
        console.log("Servidor iniciado ON");
    }

})