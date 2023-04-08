import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://portal:0000@portaldatabase.i8tnjca.mongodb.net/portal_db"
);

let portal_db = mongoose.connection;

export default portal_db;
