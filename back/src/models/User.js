import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cursos",
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
