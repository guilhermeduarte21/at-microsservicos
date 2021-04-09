//index.js
const correcaoAtividades = require("./api/correcaoAtividades");
const repository = require("./repository/repository");
const server = require("./server/server");

(async () => {
  try {
    await server.start(correcaoAtividades, repository);
  } catch (error) {
    console.error(error);
  }
})();
