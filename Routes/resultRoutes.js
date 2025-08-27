import express from "express";
import { saveResult, getResults } from "../controllers/resultController.js";

const router = express.Router();

router.post("/results", saveResult); // Save result
router.get("/results", getResults); // Fetch all results

export default router;
