import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    description: String,
    deletedAt: Date,
    deleted: {
      type: Boolean,
      deafult: false,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", categorySchema, "categories");
export default Category;
