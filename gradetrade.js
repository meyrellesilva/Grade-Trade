
// Definir a classe Disciplina
class Disciplina {
  constructor(nome, codigo, professor, dataInicio, dataFim) {
    this.nome = nome;
    this.codigo = codigo;
    this.professor = professor;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.avaliacoes = [];
  }

  // Adicionar uma nova avaliação
  adicionarAvaliacao(avaliacao) {
    this.avaliacoes.push(avaliacao);
  }

  // Calcular a média da disciplina
  calcularMedia() {
    let somaNotas = 0;
    let somaPesos = 0;

    for (let i = 0; i < this.avaliacoes.length; i++) {
      somaNotas += this.avaliacoes[i].nota * this.avaliacoes[i].peso;
      somaPesos += this.avaliacoes[i].peso;
    }

    if (somaPesos === 0) {
      return 0;
    } else {
      return somaNotas / somaPesos;
    }
  }
}

// Definir a classe Avaliacao
class Avaliacao {
  constructor(tipo, data, peso, nota) {
    this.tipo = tipo;
    this.data = data;
    this.peso = peso;
    this.nota = nota;
  }
}

// Definir um objeto para armazenar as disciplinas
let disciplinas = {};

// Adicionar uma nova disciplina
function adicionarDisciplina() {
  let nome = prompt("Nome da disciplina:");
  let codigo = prompt("Código da disciplina:");
  let professor = prompt("Nome do professor:");
  let dataInicio = prompt("Data de início da disciplina:");
  let dataFim = prompt("Data de fim da disciplina:");

  disciplinas[codigo] = new Disciplina(nome, codigo, professor, dataInicio, dataFim);
}

// Adicionar uma nova avaliação a uma disciplina existente
function adicionarAvaliacao() {
  let codigo = prompt("Código da disciplina:");
  let disciplina = disciplinas[codigo];

  if (disciplina) {
    let tipo = prompt("Tipo da avaliação:");
    let data = prompt("Data da avaliação:");
    let peso = parseInt(prompt("Peso da avaliação:"));
    let nota = parseInt(prompt("Nota da avaliação:"));

    disciplina.adicionarAvaliacao(new Avaliacao(tipo, data, peso, nota));
  } else {
    alert("Disciplina não encontrada.");
  }
}

// Calcular a média de uma disciplina
function calcularMedia() {
  let codigo = prompt("Código da disciplina:");
  let disciplina = disciplinas[codigo];

  if (disciplina) {
    let media = disciplina.calcularMedia();
    alert(`A média da disciplina ${disciplina.nome} é ${media.toFixed(2)}.`);
  } else {
    alert("Disciplina não encontrada.");
  }

    const disciplinas = [
    {nome: "", carga_horaria: 80, data_prova: '15/05/2023', nota: 8, faltas: 5},
    {nome: "", carga_horaria: 60, data_prova: '20/05/2023', nota: 7.5, faltas: 3},
    {nome: "", carga_horaria: 40, data_prova: '25/05/2023', nota: 9, faltas: 2},
    {nome: "", carga_horaria: 40, data_prova: '30/05/2023', nota: 6.5, faltas: 7}
  ];



}
