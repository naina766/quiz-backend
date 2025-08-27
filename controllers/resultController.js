import Result from "../models/Result.js";

export const saveResult = async (req, res) => {
  try {
    const { email, score, domain_wise_score } = req.body;

    const newResult = new Result({ email, score, domain_wise_score });
    await newResult.save();

    res
      .status(201)
      .json({ message: "Result saved successfully", data: newResult });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving result", error: error.message });
  }
};

export const getResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching results", error: error.message });
  }
};
