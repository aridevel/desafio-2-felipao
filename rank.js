// Calculadora de Partidas Ranqueadas
function rank(victories, defeats){
  const totalVictories = victories - defeats;
  let level; 

  if (victories < 10){
    level = "Ferro";
  } else if (victories >= 11 && victories <= 20){
    level = "Bronze";
  } else if (victories >= 21 && victories <= 50){
    level = "Prata";
  } else if (victories >= 51 && victories <= 80){
    level = "Ouro";
  } else if (victories >= 81 && victories <= 90){
    level = "Diamante";
  } else if (victories >= 91 && victories <= 100){
    level = "Lendário";
  } else {
    level = "Imortal"
  }
  
  const finalMessage = '"O Herói tem de saldo de ${rank} está no nível de ${level}';
  return rank;
}

let result = rank(120, 80);
console.log("O Herói tem um saldo de " + result + " e está no nível de " + level)