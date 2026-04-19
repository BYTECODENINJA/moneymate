import dns from "node:dns";
// 1. DNS Fix: Force Google DNS to resolve MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import { Env } from "./config/env.config.js";
import { httpStatus } from "./config/http.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { BadRequestException } from "./utils/app-error.js";
import { asyncHandler } from "./middlewares/asyncHandler.middleware.js";
import connectDb from "./config/database.config.js";

const app = express();

// 2. Standard Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: Env.FRONTEND_ORIGIN,
        credentials: true,
    })
);

// 3. Routes
app.get(
    "/",
    asyncHandler(async (req: Request, res: Response) => {
        // Note: Code after 'throw' won't execute, this is just for testing
        // throw new BadRequestException("Invalid request");
        res.status(httpStatus.OK).json({ message: "Server is up and running" });
    })
);

// 4. Error Handler MUST be the last middleware
app.use(errorHandler);

// 5. Connect to DB THEN start the server
const startServer = async () => {
    try {
        await connectDb();
        app.listen(Env.PORT, () => {
            console.log(`Server is running on port: ${Env.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
