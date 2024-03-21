const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

teclado.question("\nInforme o primeiro valor: ", (valor1) => {
    teclado.question("Informe o segundo valor: ", (valor2) => {
        teclado.question("Informe o segundo valor: ", (valor3) => {
            teclado.question("Informe o segundo valor: ", (valor4) => {

            soma = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4);
            resultado = soma / 4;
            console.log(`\nA media dos numeros apresentado é: ${resultado}\n`);
            teclado.close();
            
            })
        })
    })
})