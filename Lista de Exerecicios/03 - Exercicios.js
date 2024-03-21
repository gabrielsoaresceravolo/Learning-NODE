const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nInforme o valor da tensão aplicada: ", (valorTensao) => {
    teclado.question("Informe o valor da intensidade da corrente eletrica: ", (ValorCorrente) => {

        const valorResistencia = parseFloat(valorTensao) / parseFloat(ValorCorrente);

        console.log(`\nO valor da resistencia do condutor é: ${valorResistencia.toFixed(2)}`);
        teclado.close();
            
    });
});
