import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
  },
  words: {
    type: Number,
  },
});

const Category = mongoose.model("category", categorySchema);

export default Category;
