const { test, expect, beforeAll, afterAll } = require("@jest/globals");
const server = require("../server/server");
const correcaoAtividade = require("./correcaoAtividades");
const request = require("supertest");
const repositoryMock = require("../repository/__mocks__/repository");

let app = null;

beforeAll(async () => {
  process.env.PORT = 3007;
  app = await server.start(correcaoAtividade, repositoryMock);
});

afterAll(async () => {
  await server.stop();
});

test("GET /atividadesCorrigidas 200 OK", async () => {
  const response = await request(app).get("/atividadesCorrigidas");
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});

test("GET /atividadesCorrigidas/:id 200 OK", async () => {
  const testAtividadeCorrigidaId = "1";
  const response = await request(app).get(
    `/atividadesCorrigidas/${testAtividadeCorrigidaId}`
  );
  expect(response.status).toEqual(200);
  expect(response.body).toBeTruthy();
});

test("GET /atividadesCorrigidas/:id 404 NOT FOUND", async () => {
  const testAtividadeCorrigidaId = "-1";
  const response = await request(app).get(
    `/atividadesCorrigidas/${testAtividadeCorrigidaId}`
  );
  expect(response.status).toEqual(404);
});

test("POST /corrigirAtividade/ 201 OK", async () => {
  const atividadeCorrigida = {
    id_atividade: "606c9f1abb5c011b7ace8f60",
    aluno: "Guilherme Duarte",
    disciplina: "Engenharia",
    nota: 5,
  };

  const response = await request(app)
    .post("/corrigirAtividade/")
    .set("Content-Type", "application/json")
    .send(atividadeCorrigida);

  expect(response.status).toEqual(201);
  expect(response.body).toBeTruthy();
});

test("DELETE /atividadeCorrigida/:id 204 NO CONTENT", async () => {
  const response = await request(app).delete("/atividadeCorrigida/1");
  expect(response.status).toEqual(204);
});
