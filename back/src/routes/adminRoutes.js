import express from "express";
import adminController from "../controllers/admin.js";

const router = express.Router();

router
  .get("/admin", adminController.listarAdmin)
  .get("/admin/:id", adminController.listarAdminPorId)
  .post("/admin", adminController.cadastrarAdmin)
  .put("/admin/:id", adminController.atualizarAdmin)
  .delete("/admin/:id", adminController.excluirAdmin);

export default router;
