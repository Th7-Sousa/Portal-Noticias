import express from "express";
import user from "./userRoutes.js";
import admin from "./adminRoutes.js";
import publicacoes from "./publicacoesRoutes.js";
import cursos from "./cursosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Rota OK" });
  });

  app.use(
    express.json(), 
    admin, 
    cursos, 
    publicacoes, 
    user
    )
};

export default routes;
