import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.error("Mongodb URL not set or not found!");

  if (isConnected)
    return console.log("Database connection already established.");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Database connection established.");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    throw new Error(error.message);
  }
};
