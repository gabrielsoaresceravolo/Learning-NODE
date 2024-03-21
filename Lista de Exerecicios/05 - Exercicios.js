const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nDigite o valor do primeiro lado: ", (lado1) => {
    teclado.question("Digite o valor do segundo lado: ", (lado2) => {

        const area = parseInt(lado1) * parseInt(lado2);
        console.log(`\nA área da figura é: ${area}\n`);

        if (lado1 === lado2)
            console.log(`Isto é um quadrado!\n`);
        else
            console.log(`Isto é um retangulo!\n`);

        teclado.close();
    });
});
