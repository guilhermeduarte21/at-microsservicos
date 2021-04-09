const database = require("../config/database");
const { ObjectId } = require("mongodb");

async function getAllAtividadesConcluidas() {
  const db = await database.connect();
  return db.collection("atividadesConcluidas").find().toArray();
}

async function getAtividadeConcluidaById(id) {
  const db = await database.connect();
  return db
    .collection("atividadesConcluidas")
    .findOne({ _id: new ObjectId(id) });
}

async function addAtividadeConcluida(atividade) {
  const db = await database.connect();
  const result = await db
    .collection("atividadesConcluidas")
    .insertOne(atividade);
  return result.ops[0];
}

async function deleteAtividadeConcluida(id) {
  const db = await database.connect();
  return db
    .collection("atividadesConcluidas")
    .deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  getAllAtividadesConcluidas,
  getAtividadeConcluidaById,
  addAtividadeConcluida,
  deleteAtividadeConcluida,
};
