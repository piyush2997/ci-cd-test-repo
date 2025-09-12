import express, { Request, Response } from "express";
import logger from "./middlewares/logger";
import helloRouter from "./routes/hello";
import healthCheckRouter from "./routes/healthCheck";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/hello", helloRouter);
app.use("/api/health", healthCheckRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("🚀 Node + TS + Express backend running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
