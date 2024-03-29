import mongoose from "mongoose";

const publicacoesSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  diretorio: { type: String, required: true },
});

const publicacoes = mongoose.model("publicacoes", publicacoesSchema);

export default publicacoes;
