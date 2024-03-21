const readline = require("readline");
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question("\nDigite um número: ", (numero1) => {
    teclado.question("\nDigite um número: ", (numero2) => {
        teclado.question("\nDigite um número: ", (numero3) => {

            let maiorNumero = numero1;

            if(maiorNumero < numero2)
                maiorNumero = numero2
            if(maiorNumero < numero3)
                maiorNumero = numero3
            
            console.log(`\nO maior numero é: ${maiorNumero}\n`);

        });
    });
});
