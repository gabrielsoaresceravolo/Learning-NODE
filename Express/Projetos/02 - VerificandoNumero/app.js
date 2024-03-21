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


app.post('/verificarNumero', urlencodedParser, function(req, res) 
{
    fs.readFile('resultado.html', function(e, dados) 
    {
        
        let numero = req.body.valor1;
        let info;

        if (numero > 0) 
        {
            info = 'O número é positivo.';
        } 
        else if (numero < 0) 
        {
            info = 'O número é negativo.';
        } 
        else 
        {
            info = 'O número é zero.';
        }

        dados = dados.toString().replace("{{info}}", info);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dados);
        res.end();
    })
});