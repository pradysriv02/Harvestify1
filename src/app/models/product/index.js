import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    soil: Number,
    p: Number,
    n: Number,
    k: Number,
    area: String,
    crop: Number,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("farmer", UserSchema);

export default Product;
