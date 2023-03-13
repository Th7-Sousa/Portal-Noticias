import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);

export default user;
