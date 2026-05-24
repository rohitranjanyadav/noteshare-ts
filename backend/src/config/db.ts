import mongoose from "mongoose";
import envConfig from "./config.ts";

const connectToDatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected Successfully!!!");
    });
    await mongoose.connect(envConfig.mongodbString as string);
  } catch (error) {
    console.log("MongoDB Connection Failed!!!");
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
