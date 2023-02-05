import mongoose from "mongoose";

mongoose.connect("mongodb+srv://portal:0000@cluster0.xqucp9p.mongodb.net/test");

let dataBase = mongoose.connection;

export default dataBase;
