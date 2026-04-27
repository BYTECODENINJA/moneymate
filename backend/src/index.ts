import "dotenv/config";
import dns from "node:dns";

// DNS Fix: Force Google DNS to resolve MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import cors from "cors";
import passport from "passport";
import { Env } from "./config/env.config.js";
import { httpStatus } from "./config/http.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { asyncHandler } from "./middlewares/asyncHandler.middleware.js";
import connectDb from "./config/database.config.js";
import routes from "./routes/index.js";
import "./config/passport.config.js";
import { initializeCrons } from "./cron/index.js";

const app = express();

// Standard Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: Env.FRONTEND_ORIGIN,
        credentials: true,
    })
);
app.use(passport.initialize());

// Routes
app.use(Env.BASE_PATH, routes);

app.get(
    "/",
    asyncHandler(async (req, res) => {
        res.status(httpStatus.OK).json({ message: "Server is up and running" });
    })
);

// Error Handler MUST be the last middleware
app.use(errorHandler);

// Connect to DB THEN start the server
const startServer = async () => {
    try {
        await connectDb();
        initializeCrons();
        app.listen(Env.PORT, () => {
            console.log(`Server is running on port: ${Env.PORT} in ${Env.NODE_ENV} mode`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
