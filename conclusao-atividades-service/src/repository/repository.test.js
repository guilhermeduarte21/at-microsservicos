const { test, expect, beforeAll } = require("@jest/globals");
const repository = require("./repository");

let atividadeConcluidaId = null;

beforeAll(async () => {
  const atividadesConcluidas = await repository.getAllAtividadesConcluidas();
  atividadeConcluidaId = atividadesConcluidas[0]._id;
});

test("getAllAtividadesConcluidas", async () => {
  const atividadesConcluidas = await repository.getAllAtividadesConcluidas();
  expect(Array.isArray(atividadesConcluidas)).toBeTruthy();
  expect(atividadesConcluidas.length).toBeTruthy();
});

test("getAtividadeConcluidaById", async () => {
  const atividadeConcluida = await repository.getAtividadeConcluidaById(
    atividadeConcluidaId
  );
  expect(atividadeConcluida).toBeTruthy();
});

test("addAtividadeConcluida", async () => {
  const atividadeConcluida = {
    tituloAtividade: "TP5",
    aluno: "Guilherme Duarte",
    disciplina: "Engenharia",
    turma: 2,
    dataEntrega: new Date(),
  };

  let result;

  try {
    result = await repository.addAtividadeConcluida(atividadeConcluida);
    expect(result).toBeTruthy();
  } finally {
    if (result) await repository.deleteAtividadeConcluida(result._id);
  }
});

test("deleteAtividadeConcluida", async () => {
  const atividadeConcluida = {
    tituloAtividade: "TP5",
    aluno: "Guilherme Duarte",
    disciplina: "Engenharia",
    turma: 2,
    dataEntrega: new Date(),
  };

  const result = await repository.addAtividadeConcluida(atividadeConcluida);
  const result2 = await repository.deleteAtividadeConcluida(result._id);
  expect(result2).toBeTruthy();
});
