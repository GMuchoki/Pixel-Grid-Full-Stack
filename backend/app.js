import express from "express";
import cors from "cors";
import gridRoutes from "../backend/src/routes/gridRoutes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", gridRoutes);

export default app;