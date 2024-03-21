let express = require('express');
let app = express();
let servidor = app.listen(8080, function() 
{
    let porta = servidor.address().port;
    console.log(`O Servidor esta funcionando na porta ${porta}`)
});

// FireStreamer
let fs = require('fs');

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: true});

// Chamando a pagina index.html

app.get('/', function(req, res) 
{
    fs.readFile('index.html', function(error, dados) 
    {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dados);
        res.end();
    })
})

// Metodos do Sistema

app.get('/NomeDoMetodo', (req, res) =>
{
    fs.readFile('pagina.html', function(e, dados) 
    {

        // Escrever o codigo do get aqui!!!

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dados);
        res.end();
    })
});

app.post('/NomeDoMetodo', urlencodedParser(req, res) 
{
    fs.readFile('pagina.html', function(e, dados) 
    {

        // Escrever o codigo do post aqui!!!

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dados);
        res.end();
    })
});

// ====================================================================