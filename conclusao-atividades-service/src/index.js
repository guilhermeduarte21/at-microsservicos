//index.js
const conclusaoAtividades = require("./api/conclusaoAtividades");
const repository = require("./repository/repository");
const server = require("./server/server");

(async () => {
  try {
    await server.start(conclusaoAtividades, repository);
  } catch (error) {
    console.error(error);
  }
})();
