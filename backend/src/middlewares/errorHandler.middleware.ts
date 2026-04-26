import type {ErrorRequestHandler} from "express";
import {httpStatus} from "../config/http.config.js";
import {AppError} from "../utils/app-error.js";

export const errorHandler: ErrorRequestHandler = (error, req, res, next): void =>{
    console.error("An error occured on PATH:", req.path);
    console.error(error);

    if(error instanceof AppError){
        res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        });
        return;
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
        {
            message: "Something went wrong",
            error: error?.message || "Unknown error",
        }
    );
}