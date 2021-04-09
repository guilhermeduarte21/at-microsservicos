module.exports = (app, repository) => {
  app.get("/atividadesConcluidas", async (req, res, next) => {
    const atividadesConcluidas = await repository.getAllAtividadesConcluidas();
    res.json(atividadesConcluidas);
  });

  app.get("/atividadesConcluidas/:id", async (req, res, next) => {
    const atividadeConcluida = await repository.getAtividadeConcluidaById(
      req.params.id
    );
    if (!atividadeConcluida) return res.sendStatus(404);

    res.json(atividadeConcluida);
  });

  app.post("/atividadesConcluidas", async (req, res, next) => {
    const tituloAtividade = req.body.tituloAtividade;
    const aluno = req.body.aluno;
    const disciplina = req.body.disciplina;
    const turma = parseInt(req.body.turma);
    const dataEntrega = new Date();

    const result = await repository.addAtividadeConcluida({
      tituloAtividade,
      aluno,
      disciplina,
      turma,
      dataEntrega,
    });

    res.status(201).json(result);
  });

  app.delete("/atividadesConcluidas/:id", async (req, res, next) => {
    const id = req.params.id;
    await repository.deleteAtividadeConcluida(id);
    res.sendStatus(204);
  });
};
