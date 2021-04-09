const database = require("../config/database");
const { ObjectId } = require("mongodb");

async function getAllAtividadesCorrigidas() {
  const db = await database.connect();
  return db.collection("atividadesCorrigidas").find().toArray();
}

async function getAtividadeCorrigidaById(id) {
  const db = await database.connect();
  return db
    .collection("atividadesCorrigidas")
    .findOne({ _id: new ObjectId(id) });
}

async function addAtividadeCorrigida(atividade) {
  const db = await database.connect();
  const result = await db
    .collection("atividadesCorrigidas")
    .insertOne(atividade);
  return result.ops[0];
}

async function deleteAtividadeCorrigida(id) {
  const db = await database.connect();
  return db
    .collection("atividadesCorrigidas")
    .deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  getAllAtividadesCorrigidas,
  getAtividadeCorrigidaById,
  addAtividadeCorrigida,
  deleteAtividadeCorrigida,
};
