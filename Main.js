//Obtendo dados
let totalAulaSemestre = parseInt(prompt("Informe o total de aulas do semestre:"));
let totalDeFaltas = parseInt(prompt("Informe o total de faltas do aluno:"));
let primeiraNota = parseFloat(prompt("Informe a primeira nota:"));
let segundaNota = parseFloat(prompt("Informe a segunda nota:"));

//Calculando presença
let presençaAluno = ((totalDeFaltas/totalAulaSemestre)*100).toFixed(2);

if (presençaAluno > 25) {
    console.log("O aluno não comparaceu as aulas e foi reprovado.");
}
//Calculando provas
let mediaNotas = ((primeiraNota+segundaNota)/2);

if (mediaNotas >= 7) {
    console.log("O aluno foi aprovado.");
}
else if ((mediaNotas >= 5) && (mediaNotas <= 7 )) 
console.log("O aluno fara recuperação. ");


console.log(("Total de aulas: ")+totalAulaSemestre);
console.log(("Total de faltas: ")+totalDeFaltas);
console.log(("Percentual de presença: ")+presençaAluno);
console.log(("Media notas do aluno: ")+mediaNotas);