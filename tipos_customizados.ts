type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
};

alunos.push({
  nome: "Júlia",
  cursos: ["Arquitetura"],
  idade: 29,
});

const novoAluno: aluno = {
  nome: "Lucas",
  idade: 32,
};

function exibeAluno(aluno: aluno) {
  console.log(aluno.nome);
}

exibeAluno(novoAluno);
