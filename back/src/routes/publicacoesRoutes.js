import express from "express";
import publicacoesController from "../controllers/publicacoes.js";

const router = express.Router();

router
  .get("/publicacoes", publicacoesController.novaPubli)
  .post("/publicacoes", publicacoesController.atualizarPubli)
  .delete("/publicacoes/:id", publicacoesController.excluirPubli);

export default router;
