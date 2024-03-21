const dataAtual = new Date();

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth()
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours();
const minuto = dataAtual.getMinutes();

console.log(`Data e hora atual: ${dia}/${mes}/${ano} ${hora}:${minuto}`);
