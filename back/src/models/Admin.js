import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  email: { type: String, required: true },
});

const admin = mongoose.model("admin", adminSchema);

export default admin;
