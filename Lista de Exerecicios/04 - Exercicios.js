const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nInforme o valor da primeira nota: ", (nota1) => {
    teclado.question("Informe o valor da segunda nota: ", (nota2) => {

        const mediaFinal = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        console.log(`\nMedia final: ${mediaFinal.toFixed(1)}`);

        if (mediaFinal >= 6)
            console.log(`\nO aluno passou!\n`);
        else
            console.log(`\nO aluno não passou!\n`);

        teclado.close();
            
    });
});
