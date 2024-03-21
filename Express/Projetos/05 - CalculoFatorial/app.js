let express = require('express');
let app = express();
let servidor = app.listen(8080, function() 
{
    let porta = servidor.address().port;
    console.log(`O Servidor esta funcionando na porta ${porta}`)
});

// File System
let fs = require('fs');

app.get('/', function(req, res) 
{
    fs.readFile('index.html', function(error, dado) 
    {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dado);
        res.end();
    })
});

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: true});

app.post('/calcularFatorial', urlencodedParser, function(req, res) 
{
    let numero = parseFloat(req.body.numero);
    let info = 1;

    for (let i = numero; i > 0; i--) 
    {
        info *= i;
    }

    dados = dados.toString().replace("{{info}}", info);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(dados);
    res.end();
});

