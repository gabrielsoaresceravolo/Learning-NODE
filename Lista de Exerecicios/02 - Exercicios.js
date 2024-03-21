const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nInforme o valor unitário do produto: ", (valorUnitario) => {
    teclado.question("Informe a quantidade: ", (quantidadeProduto) => {
        teclado.question("Informe o valor do desconto: ", (valorDesconto) => {

            const valorTotal = parseFloat(valorUnitario) * parseFloat(quantidadeProduto);
            const Desconto = valorTotal * (parseFloat(valorDesconto) / 100);
            const valorFinal = valorTotal - Desconto

            console.log(`\nValor Sem Desconto: R$ ${valorTotal.toFixed(2)}`);
            console.log(`Pagamento Final: R$ ${valorFinal.toFixed(2)}\n`);
            teclado.close();
            
        });
    });
});
