import mongoose from "mongoose";

mongoose.connect("mongodb+srv://portal:0000@cluster0.xqucp9p.mongodb.net/test");

let portal_db = mongoose.connection;

export default portal_db;
