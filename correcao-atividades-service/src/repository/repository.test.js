const { test, expect, beforeAll } = require("@jest/globals");
const repository = require("./repository");

let atividadeCorrigidaId = null;

beforeAll(async () => {
  const atividadesCorrigidas = await repository.getAllAtividadesCorrigidas();
  atividadeCorrigidaId = atividadesCorrigidas[0]._id;
});

test("getAllAtividadesCorrigidas", async () => {
  const atividadesCorrigidas = await repository.getAllAtividadesCorrigidas();
  expect(Array.isArray(atividadesCorrigidas)).toBeTruthy();
  expect(atividadesCorrigidas.length).toBeTruthy();
});

test("getAtividadeCorrigidaById", async () => {
  const atividadeCorrigida = await repository.getAtividadeCorrigidaById(
    atividadeCorrigidaId
  );
  expect(atividadeCorrigida).toBeTruthy();
});

test("addAtividadeCorrigida", async () => {
  const atividadeCorrigida = {
    id_atividade: "606c9f1abb5c011b7ace7f6f",
    aluno: "DuarteTest",
    disciplina: "Engenharia de Test",
    nota: 10,
  };

  let result;

  try {
    result = await repository.addAtividadeCorrigida(atividadeCorrigida);
    expect(result).toBeTruthy();
  } finally {
    if (result) await repository.deleteAtividadeCorrigida(result._id);
  }
});

test("deleteAtividadeCorrigida", async () => {
  const atividadeCorrigida = {
    id_atividade: "606c9f1abb5c011b7ace7f6f",
    aluno: "DuarteTest",
    disciplina: "Engenharia de Test",
    nota: 10,
  };

  const result = await repository.addAtividadeCorrigida(atividadeCorrigida);
  const result2 = await repository.deleteAtividadeCorrigida(result._id);
  expect(result2).toBeTruthy();
});
