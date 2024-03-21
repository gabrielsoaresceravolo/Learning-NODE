const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nDigite um número: ", (numero) => {

    let fatorial = 1;

    for (let i = numero; i > 1; i--) 
    {
        fatorial = fatorial * i;
    }

    console.log(`\nA fatorial de ${numero} é: ${fatorial}\n`);
    teclado.close();
});
