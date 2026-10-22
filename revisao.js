// let brinquedo1 = "Bola de Futebol";
//  console.log(brinquedo1);

// let brinquedo2 = "Boneca";
//  console.log(brinquedo2);

// let brinquedo3 = "Carrinho Hot Wheels";
//  console.log(brinquedo3);

// let preco = 500
// console.log(preco);
// console.log(typeof preco);

// let texto = "neymito";
// let numero = 67;
// let ligado = true;
// let vazio = null;
// let indeferido;
// let numeroGrande = 7658365734658346n;
// console.log(typeof texto);   
// console.log(typeof numero);
// console.log(typeof ligado);
// console.log(typeof vazio);
// console.log(typeof indeferido);
// console.log(typeof numeroGrande);

// const n1 = 120
// const n2 = 65
// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);

// console.log(67 == "67");
// console.log(42 === "42");

// let ativo = true
// let inativo = !ativo
// console.log("ativo", ativo)
// consolo.log("inativo", inativo)

// console.log("20" + 5); 
// console.log(Number("20") + 5);

// const resultado = "5" + 3;
// console.log(resultado);
// console.log(typeof resultado);

// const resultado = "10" -2
// console.log(resultado);
// console.log(typeof resultado)

// const textoDecimal = "123.45"
// const numeroConvertido = Number(textoDecimal)
// const total = numeroConvertido = 10
// console.log(total); 

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(100));
// console.log(Boolean("Gato"))

// let saldo = 100
// saldo += 50
// saldo -= 20
// saldo *= 2
// saldo /= 4
// console.log("Saldo Final: ", saldo);

// const idade = 67
// const mensagem = idade >= 60 ? "aposenta" : "nao"
// console.log(mensagem)

// const color =  "vermelho";
// switch (color){
//     case "vermelho" : 
//         console.log("pare")
//     break;
//     case "amarelo" : 
//         console.log(atençao)
//     break;
//     case "verde" : 
//         console.log(siga)
//     break;
// }

// const frutas =["uva", "pera", "maca"];
// for(const fruta of frutas){
//     console.log("fruta da vez:", frutas);  
// }

// let j = 0;
// while (j = j + 3) {
//     console.log("valor de j:" , j);
//     j++;
// }


// const numeros = [1, 2, 3, 4,];
// const triplo = numeros.map(n => n * 3);
// console.log(triplo);
// const idades = [12, 17, 18, 22, 15, 30];
// const maiores = idades.filter(idade => idade >= 18);
// console.log(maiores);

// const carrinho = [10, 20.5, 30];
// const total = carrinho.reduce((acc, p) => acc + p, 0);
// console.log(total);
// const nomes = ['ana', 'carlos', 'joao'];
// nomes.forEach(n => console.log(`ola, ${n}!`))

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultado = numeros.filter(n => n % 2 === 0).map(n => n * 5);
// console.log(resultado);

// const a = [1, 2]
// const b = [3, 4]
// const c = [...a, ...b]
// const user = {nome: 'ana', idade: 30}
// const {nome, idade } = user
// console.log(nome)

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