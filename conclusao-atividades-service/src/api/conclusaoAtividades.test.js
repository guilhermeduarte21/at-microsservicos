const { test, expect, beforeAll, afterAll } = require("@jest/globals");
const server = require("../server/server");
const atividadeConcluida = require("./conclusaoAtividades");
const request = require("supertest");
const repositoryMock = require("../repository/__mocks__/repository");

let app = null;

beforeAll(async () => {
  process.env.PORT = 3003;
  app = await server.start(atividadeConcluida, repositoryMock);
});

afterAll(async () => {
  await server.stop();
});

test("GET /atividadesConcluidas 200 OK", async () => {
  const response = await request(app).get("/atividadesConcluidas");
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.body)).toBeTruthy();
  expect(response.body.length).toBeTruthy();
});

test("GET /atividadesConcluidas/:id 200 OK", async () => {
  const testAtividadeConcluidaId = "1";
  const response = await request(app).get(
    `/atividadesConcluidas/${testAtividadeConcluidaId}`
  );
  expect(response.status).toEqual(200);
  expect(response.body).toBeTruthy();
});

test("GET /atividadesConcluidas/:id 404 NOT FOUND", async () => {
  const testAtividadeConcluidaId = "-1";
  const response = await request(app).get(
    `/atividadesConcluidas/${testAtividadeConcluidaId}`
  );
  expect(response.status).toEqual(404);
});

test("POST /atividadesConcluidas/ 201 OK", async () => {
  const atividadeConcluida = {
    tituloAtividade: "TP5",
    aluno: "Guilherme Duarte",
    disciplina: "Engenharia",
    turma: 2,
    dataEntrega: new Date(),
  };

  const response = await request(app)
    .post("/atividadesConcluidas/")
    .set("Content-Type", "application/json")
    .send(atividadeConcluida);

  expect(response.status).toEqual(201);
  expect(response.body).toBeTruthy();
});

test("DELETE /atividadesConcluidas/:id 204 NO CONTENT", async () => {
  const response = await request(app).delete("/atividadesConcluidas/1");
  expect(response.status).toEqual(204);
});
