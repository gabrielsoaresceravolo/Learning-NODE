const dataAtual = new Date();
const informacoesData = dataAtual.toLocaleString("pt-BR", {
    weekday:"long", day:"2-digit", month:"long", year:"numeric"
});

console.log(`Hoje é ${informacoesData}`);