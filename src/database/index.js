import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://imprakharzz11:prakharlodu@cluster0.e9mfv8j.mongodb.net/"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
