import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
export const connect= async () :Promise<void>=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect success");
  }catch(error){
    console.log("Connect fail");
  }
}
