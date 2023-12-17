function saldoRankeadas(vitorias, derrotas) {
  let saldoDeRankeadas = vitorias - derrotas;
  return saldoDeRankeadas;
}

function calculaRanking(saldoDeRankeadas) {
  if (saldoDeRankeadas <= 10) {
    return "Ferro";
  } else if (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20) {
    return "Bronze";
  } else if (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50) {
    return "Prata";
  } else if (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80) {
    return "Ouro";
  } else if (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90) {
    return "Diamante";
  } else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

for (let i = 1; i <= 15; i++) {
  let saldo = saldoRankeadas(10 * i, 2 * i);
  let nivel = calculaRanking(saldo);
  console.log(`O Herói tem o saldo de ${saldo} está no nível de ${nivel}`);
}
