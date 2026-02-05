import express from "express";
import cors from "cors";
import travelRoutes from "./travel.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/travel", travelRoutes);

export default app;
