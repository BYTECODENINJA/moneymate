import type { ErrorRequestHandler } from "express";
import {AppError} from "../utils/app-error.js";

export const errorHandler: ErrorRequestHandler = (err, req, res, next):any  => {
    // req now correctly points to the Request object, which has 'path'
    console.log("Error occurred on PATH:", req.path);

    if(err instanceof  AppError){
        return res.status(err.statusCode).json({
            message: err.message,
            errorCode: err.errorCode,
        });
    }

    return res.status(500).json({
        message: "Internal Server Error",
        // Ensure 'err' matches the first parameter name
        message: err?.message || "Unknown error occurred",
    });
};
