import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
});

const cursos = mongoose.model("cursos", cursosSchema);

export default cursos;
