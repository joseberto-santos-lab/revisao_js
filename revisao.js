

const alunos = [
  { nome: "jose", nota: 8.5 },
  { nome: "Breno", nota: 5.0 },
  { nome: "marcos", nota: 9.0 },
  { nome: "benjamin", nota: 4.5 },
  { nome: "emanoel", nota: 7.0 },
  { nome: "josue", nota: 6.0 },
  { nome: "nicolas", nota: 7.5 },
  { nome: "jorge", nota: 3.0 },
  { nome: "cristhian", nota: 5.5 },
  { nome: "João", nota: 2.0 }
];
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(" Lista de Alunos Aprovados");
alunosAprovados.forEach(aluno => {
  console.log(`Aluno: ${aluno.nome} | Nota: ${aluno.nota}`);
});