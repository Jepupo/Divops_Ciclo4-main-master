import mongoose from "mongoose";
//import { MONGODB_URI } from './config.js'

const MONGODB_URI = "mongodb+srv://123user:123user@cluster0.idro7k1.mongodb.net/?retryWrites=true&w=majority";

export async function DBconnection() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connection established to " + db.connection.name)
  } catch (error) {
  }
}
