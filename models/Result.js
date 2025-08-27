import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    domain_wise_score: {
      // type: Map,
      // of: Number,
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);
export default Result;
