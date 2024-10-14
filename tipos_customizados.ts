type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
};

const novoAluno: aluno = {
  nome: "Lucas",
  idade: 32,
};

function exibeAluno(aluno: aluno) {
  console.log(aluno.nome);
}

exibeAluno(novoAluno);
