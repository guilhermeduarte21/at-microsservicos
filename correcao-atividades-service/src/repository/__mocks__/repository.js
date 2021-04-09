const atividadesCorrigidas = [
  {
    _id: "606e09cfd98cdcf90e5e8a7a",
    id_atividade: "606c9f1abb5c011b7ace8f5f",
    aluno: "Duarte1",
    disciplina: "Engenharia de Software1",
    nota: 1,
  },
  {
    _id: "606e09cfd98cdcf90e5e8a7b",
    id_atividade: "606c9f1abb5c011b7ace8f60",
    aluno: "Duarte2",
    disciplina: "Engenharia de Software2",
    nota: 2,
  },
  {
    _id: "606e09cfd98cdcf90e5e8a7c",
    id_atividade: "606c9f1abb5c011b7ace8f61",
    aluno: "Duarte3",
    disciplina: "Engenharia de Software3",
    nota: 3,
  },
];

function getAllAtividadesCorrigidas() {
  return atividadesCorrigidas;
}

function getAtividadeCorrigidaById(id) {
  if (id == -1) return null;

  atividadesCorrigidas[0]._id = id;
  return atividadesCorrigidas[0];
}

function addAtividadeCorrigida(atividade) {
  return atividadesCorrigidas[0];
}

function deleteAtividadeCorrigida(id) {
  if (!id) throw new Error("Não foi possivel excluir essa atividade!");
  return true;
}

module.exports = {
  getAllAtividadesCorrigidas,
  getAtividadeCorrigidaById,
  addAtividadeCorrigida,
  deleteAtividadeCorrigida,
};
