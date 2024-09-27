let vitorias = 20;
let derrotas = 2;

let [saldoVitorias, nivel] = partidasRankeadas(vitorias, derrotas)

console.log(`O Herói tem um saldo ${saldoVitorias} está no nível de ${nivel}`)


function partidasRankeadas( qtdVitorias, qtdDerrotas ) {

  let saldo = qtdVitorias - qtdDerrotas
  let nivel = '';

  if (saldo <= 10) {
    nivel = 'Ferro';
  
  } else if ( saldo >= 11 && saldo <= 20) {
    nivel = 'Bronze';
  
  } else if ( saldo >= 21 && saldo <= 50) {
    nivel = 'Prata';
  
  } else if ( saldo >= 51 && saldo <= 80) {
    nivel = 'Ouro';
  
  } else if ( saldo >= 81 && saldo <= 90) {
    nivel = 'Diamante';
  
  } else if ( saldo >= 91 && saldo <= 100) {
    nivel = 'Lendário';
  
  } else if (saldo >= 101) {
      nivel = 'Imortal';
  
  }

  return [saldo,nivel];  
}