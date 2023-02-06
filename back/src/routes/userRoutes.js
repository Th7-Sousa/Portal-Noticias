import express from "express";
import userController from '../controllers/user';

const router = express.Router();

router
    .get("/user", userController.listarUser)
    .get("/user/:id", userController.listarUserPorId)
    .post("/user", userController.cadastrarUser)
    .put("/user/:id", userController.atualizarUser)
    .delete("/user/:id", userController.excluirUser)
    
export default router;