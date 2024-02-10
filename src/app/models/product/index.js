import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    soil: String,
    p: Number,
    n: Number,
    k: Number,
    area: String,
    crop: String,
  },
  { timestamps: true }
);

const Product = mongoose.models.Products || mongoose.model("User", UserSchema);

export default Product;
