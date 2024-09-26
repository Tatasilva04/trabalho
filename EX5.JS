//e a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

//Entrada
//O arquivo de entrada contém 2 valores com uma casa decimal cada um.

//Saída
//mprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisã de linha após o resultado, caso contrário, você receberá "Presentation Error".

let A = parseFloat(5.0);
let B = parseFloat(7.1);

var mediaA = A * 3.5;
var mediaB= B * 7.5;
var mediaFinal = (mediaA + mediaB)/11;

console.log("MEDIA = " , mediaFinal.toFixed(5));