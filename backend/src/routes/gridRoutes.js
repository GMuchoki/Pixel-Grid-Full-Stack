import express from "express";
import { addGridData, getGridData } from "../controllers/gridControllers.js";

const router = express.Router();

router.get("/grid", getGridData);

router.post("/setGridColor", addGridData);

export default router;