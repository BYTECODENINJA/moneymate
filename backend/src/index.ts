import "dotenv/config";
import express, { type NextFunction, type Request, type Response } from "express";
import { Env } from "./config/env.config.js";
import cors from "cors";
import { httpStatus } from "./config/http.config.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import {BadRequestException} from "./utils/app-error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: Env.FRONTEND_ORIGIN,
        credentials: true,
    })
);

// Fixed typo: "Respond" changed to "Response"
// Added "type" prefix to NextFunction, Request, and Response
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException("Test error handling");

    res.status(httpStatus.OK).json({
        message: "BACKEND INITIALIZED"
    });
});

app.use(errorHandler)

// Assuming you'll need this later
const PORT = Env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
