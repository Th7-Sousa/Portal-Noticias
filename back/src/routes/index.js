import express from "express";
import user from "../models/User.js";
import admin from "../models/Admin.js";
import publicacoes from "../models/Publicacoes.js";
import cursos from "../models/Cursos.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Rota OK" });
  });

  app.use(express.json(), admin, cursos, publicacoes, user);
};

export default routes;
