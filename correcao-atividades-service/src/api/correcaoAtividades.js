module.exports = (app, repository) => {
  app.get("/atividadesCorrigidas", async (req, res, next) => {
    const atividadesCorrrigidas = await repository.getAllAtividadesCorrigidas();
    res.json(atividadesCorrrigidas);
  });

  app.get("/atividadesCorrigidas/:id", async (req, res, next) => {
    const atividadeCorrigida = await repository.getAtividadeCorrigidaById(
      req.params.id
    );
    if (!atividadeCorrigida) return res.sendStatus(404);

    res.json(atividadeCorrigida);
  });

  app.post("/corrigirAtividade", async (req, res, next) => {
    const id_atividade = req.body.id_atividade;
    const aluno = req.body.aluno;
    const disciplina = req.body.disciplina;
    const nota = req.body.nota;

    const result = await repository.addAtividadeCorrigida({
      id_atividade,
      aluno,
      disciplina,
      nota,
    });

    res.status(201).json(result);
  });

  app.delete("/atividadeCorrigida/:id", async (req, res, next) => {
    const id = req.params.id;
    await repository.deleteAtividadeCorrigida(id);
    res.sendStatus(204);
  });
};
