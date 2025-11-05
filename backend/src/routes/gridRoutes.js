import express from "express";
import { getGridData } from "../controllers/gridControllers.js";

const router = express.Router();

router.get("/grid", getGridData);

export default router;