import type {ErrorRequestHandler} from "express";
import {httpStatus} from "../config/http.config.js";
import {AppError} from "../utils/app-error.js";

export const errorHandler: ErrorRequestHandler = (error, req, res, next): any =>{
    console.log("An error occured on PATH:", req.path)

    if(error instanceof Error){
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        })
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(
        {
            message: "Something went wrong",
            error: error?.message || "Unknown error",
        }
    )
}