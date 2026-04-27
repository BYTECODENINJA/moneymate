import "dotenv/config";
import dns from "node:dns";
// 1. DNS Fix: Force Google DNS to resolve MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express, {} from "express";
import cors from "cors";
import passport from "passport";
import { Env } from "./config/env.config.js";
import { httpStatus } from "./config/http.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { BadRequestException } from "./utils/app-error.js";
import { asyncHandler } from "./middlewares/asyncHandler.middleware.js";
import connectDb from "./config/database.config.js";
import routes from "./routes/index.js";
import "./config/passport.config.js"; // Initialize passport strategy
const app = express();
// 2. Standard Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
}));
app.use(passport.initialize()); // 3. Initialize passport BEFORE routes
// 4. Routes
app.use(Env.BASE_PATH, routes);
app.get("/", asyncHandler(async (req, res) => {
    res.status(httpStatus.OK).json({ message: "Server is up and running" });
}));
// 5. Error Handler MUST be the last middleware
app.use(errorHandler);
// 6. Connect to DB THEN start the server
const startServer = async () => {
    try {
        await connectDb();
        app.listen(Env.PORT, () => {
            console.log(`Server is running on port: ${Env.PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map