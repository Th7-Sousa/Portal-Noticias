import express from "express";
import portal_db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

portal_db.on("error", console.log.bind(console, "Erro de conexão"));
portal_db.once("open", () => {
  console.log("Conexão com db concluída");
});

const app = express();
app.use(express.json());
app.use(cors()); //Permisão pra requisições de outros domínios
routes(app);

export default app;
