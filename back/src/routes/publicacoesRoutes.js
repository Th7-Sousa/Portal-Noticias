import express from "express";
import publicacoesController from "../controllers/publicacoes.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" }); // define o diretório de upload de arquivos

router
  .get("/publicacoes", publicacoesController.listarPubli)
  .post(
    "/publicacoes",
    upload.single("diretorio"),
    publicacoesController.novaPubli
  )
  .put("/publicacoes/:id", publicacoesController.atualizarPubli)
  .delete("/publicacoes/:id", publicacoesController.excluirPubli);

export default router;
