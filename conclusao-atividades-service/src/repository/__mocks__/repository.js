const atividadesConcluidas = [
  {
    _id: "606c9f1abb5c011b7ace8f5f",
    tituloAtividade: "TP1",
    aluno: "Duarte",
    disciplina: "Engenharia de Software",
    turma: 1,
    dataEntrega: new Date("2021-02-21T00:00:00Z"),
  },
  {
    _id: "606c9f1abb5c011b7ace8f60",
    tituloAtividade: "TP3",
    aluno: "Duarte",
    disciplina: "Engenharia de Software",
    turma: 1,
    dataEntrega: new Date("2021-03-16T00:00:00Z"),
  },
  {
    _id: "606c9f1abb5c011b7ace8f61",
    tituloAtividade: "AT",
    aluno: "Duarte",
    disciplina: "Engenharia de Software",
    turma: 1,
    dataEntrega: new Date("2021-04-09T00:00:00Z"),
  },
];

function getAllAtividadesConcluidas() {
  return atividadesConcluidas;
}

function getAtividadeConcluidaById(id) {
  if (id == -1) return null;

  atividadesConcluidas[0]._id = id;
  return atividadesConcluidas[0];
}

function addAtividadeConcluida(atividade) {
  return atividadesConcluidas[0];
}

function deleteAtividadeConcluida(id) {
  if (!id) throw new Error("Não foi possivel excluir essa atividade!");
  return true;
}

module.exports = {
  getAllAtividadesConcluidas,
  getAtividadeConcluidaById,
  addAtividadeConcluida,
  deleteAtividadeConcluida,
};
