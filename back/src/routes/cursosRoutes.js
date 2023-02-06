import express from "express";
import cursosController from '../controllers/cursos';

const router = express.Router();

router
    .get("/cursos", cursosController.listarCursos)
    .post("/cursos", cursosController.cadastrarCurso)
    .delete("/cursos/:id", cursosController.excluirCurso)
    
export default router;