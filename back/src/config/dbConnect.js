import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://beatriz:beatriz1234@portalnoticias.ygpa5el.mongodb.net/Portal"
);

let dataBase = mongoose.connection;

export default dataBase;
