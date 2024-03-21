let express = require('express');
let app = express();
let servidor = app.listen(8080, function() 
{
    let porta = servidor.address().port;
    console.log(`O Servidor esta funcionando na porta ${porta}`)
});

// FireStreamer
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

app.post('/calculdora', function(req, res) 
{
    fs.readFile('resultado.html', function(e, dados) 
    {
        let valor1 = req.body.valor1;
        let valor2 = req.body.valor2;
        let resultados = {
            'soma' : Number(valor1) + Number(valor2),
            'subtracao' : Number(valor1) - Number(valor2),
            'divisao' : Number(valor1) / Number(valor2),
            'soma' : Number(valor1) * Number(valor2),
        }

        for (let r in resultados)
        {
            dados = dados.toString().replace("{{"+r+"}}"),
            resultado[r];
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(dados);
        res.end();
    })
});